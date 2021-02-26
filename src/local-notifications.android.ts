/* eslint-disable new-cap */

import {
  LocalNotification,
  LocalNotificationRequest,
  LocalNotificationsOptions,
} from './local-notifications.shared'

import {
  AbstractLocalNotifications,
  debug as abstractDebug,
} from './local-notifications.abstract'

import { Application } from '@nativescript/core'

/* Constants for channel ID and name */
const CHANNEL_ID = 'local-notifications'
const CHANNEL_NAME = 'Local Notifications'
const CHANNEL_IMPORTANCE = android.app.NotificationManager.IMPORTANCE_DEFAULT

/* Prefix debug and error output with '(android)' */
const debug = abstractDebug.bind(null, '(android)')

@NativeClass()
@JavaProxy('com.juit.LocalNotificationsWorker')
class LocalNotificationsWorker extends androidx.work.Worker {
  constructor(context: android.content.Context, params: androidx.work.WorkerParameters) {
    super(context, params)
  }

  doWork(): androidx.work.ListenableWorker.Result {
    const id = this.getId()
    const input = this.getInputData()
    const context = this.getApplicationContext()

    debug('Presenting notification', id)

    try {
      const title = input.getString('title')
      const message = input.getString('message')
      const data = input.getString('data')
      const activity = input.getString('activity')
      const action = input.getString('action')
      const icon = input.getInt('icon', 0)
      const color = input.getInt('color', 0)

      const intent = new android.content.Intent(context, java.lang.Class.forName(activity))
      intent.setAction(action)
      intent.putExtra('id', id.toString())
      intent.putExtra('title', title)
      intent.putExtra('message', message)
      intent.putExtra('data', data)

      const pendingIntent = android.app.PendingIntent.getActivity(context, 0, intent, 0)

      const builder = new androidx.core.app.NotificationCompat.Builder(context, CHANNEL_ID)
        .setSmallIcon(icon)
        .setColor(color)
        .setContentTitle(title)
        .setContentText(message)
        .setPriority(androidx.core.app.NotificationCompat.PRIORITY_DEFAULT)
        .setContentIntent(pendingIntent)
        .setAutoCancel(true)

      const manager = androidx.core.app.NotificationManagerCompat.from(context)

      manager.notify(id.toString(), id.hashCode(), builder.build())

      return androidx.work.ListenableWorker.Result.success()
    } catch (error) {
      console.log('Error displaying notification', error, error.stackTrace)
      return androidx.work.ListenableWorker.Result.failure()
    }
  }
}


export class LocalNotifications extends AbstractLocalNotifications {
  private _workManager?: androidx.work.WorkManager
  private _action?: string
  // See https://developer.android.com/reference/android/app/Notification.html#COLOR_DEFAULT
  private _color = 0
  private _icon = 0

  constructor(options: LocalNotificationsOptions = {}) {
    super()

    // We might be constructed _before_ the app is, so wait for launch if we
    // do not yet have a context we can use
    if (Application.android.context) {
      debug('Initializing on construction')
      this._init(Application.android.context, options)
    } else {
      Application.on('launch', () => {
        debug('Initializing on application launch')
        this._init(Application.android.context, options)
      })
    }

    // This will be called on intent dispatched to the main activity (basically
    // our app) so, if we match our action (package.LOCAL_NOTIFICATION) we treat
    // the intent as the local notification and send it off to the handler
    Application.android.on('activityNewIntent', (data) => {
      const intent: android.content.Intent = data.intent

      // Call the "notify" method immediately if we were initialized already,
      // or wait until the application has been "displayed" before notifying
      if (this._action) {
        debug('Handling notification immediately')
        this._notify(intent)
      } else {
        Application.on('displayed', () => {
          debug('Handling notification on application display')
          this._notify(intent)
        })
      }
    })
  }

  private _init(context: android.content.Context, options: LocalNotificationsOptions) {
    // Ensure we have a notification channel to deliver our local notifications
    // to users. This needs to be guarded for versions >= OREO (API v. 26).
    // Here we use the _number_ rather than "android.os.Build.VERSION.O" as this
    // is dynamically linked, and will magically fail when the class does not
    // define the "O" constant (defeating the whole purpose)
    if (android.os.Build.VERSION.SDK_INT >= 26 /* 26 => OREO */) {
      const channel = new android.app.NotificationChannel(CHANNEL_ID, CHANNEL_NAME, CHANNEL_IMPORTANCE)

      // Register the channel with the system; you can't change the
      // importance or other notification behaviors after this
      const notificationManager: android.app.NotificationManager =
          context.getSystemService(android.app.NotificationManager.class)
      notificationManager.createNotificationChannel(channel)
    }

    // Icon and color
    const { androidIcon, androidColor } = options

    // Get the resource (if any) or the default app icon (which will look bad)
    const info = context.getApplicationInfo()
    if (androidIcon) {
      const resource = context.getResources().getIdentifier(androidIcon, 'drawable', info.packageName)
      this._icon = resource || info.icon
    } else {
      this._icon = info.icon
    }

    // Set the color for the notification (or leave it default)
    if (androidColor) this._color = androidColor

    // Mark ourselves as "initialized" by remembering the action we'll use in
    // the notification intent, this is when we'll start handling notifications
    this._action = context.getApplicationInfo().packageName + '.LOCAL_NOTIFICATION'
    this._workManager = androidx.work.WorkManager.getInstance(context)
  }

  private _notify(intent: android.content.Intent) {
    const action = intent.getAction()
    if (action !== this._action) {
      debug(`Ignoring intent with action "${action}"`)
      return
    }

    const id = intent.getStringExtra('id')
    const title = intent.getStringExtra('title')
    const message = intent.getStringExtra('message')
    const data = JSON.parse(intent.getStringExtra('data'))

    const notification: LocalNotification = { id, title, message, data }
    debug('Handling notification', id)
    this._handler(notification)
  }

  scheduleNative(notification: LocalNotificationRequest, seconds: number) {
    return new Promise<string>((resolve) => {
      if (! this._action) throw new Error('Not yet initialized (action)')
      if (! this._workManager) throw new Error('Not yet initialized (workManager)')

      const data = new androidx.work.Data.Builder()
        .putString('title', notification.title)
        .putString('message', notification.message)
        .putString('data', JSON.stringify(notification.data || {}))
        .putString('activity', Application.android.startActivity.getClass().getName())
        .putString('action', this._action)
        .putInt('icon', this._icon)
        .putInt('color', this._color)
        .build()

      const request = new androidx.work.OneTimeWorkRequest.Builder(LocalNotificationsWorker.class)
        .setInitialDelay(seconds, java.util.concurrent.TimeUnit.SECONDS)
        .setInputData(data)
        .build()

      debug('Scheduling notification', request.getId(), 'in', seconds, 'sec.')

      this._workManager?.enqueue(request)
      resolve(request.getId().toString())
    })
  }

  cancel(id: string): Promise<void> {
    return new Promise<void>((resolve) => {
      if (! this._workManager) throw new Error('Not yet initialized (workManager)')
      debug('Removing notification', id)
      this._workManager.cancelWorkById(java.util.UUID.fromString(id))
      resolve()
    })
  }
}
