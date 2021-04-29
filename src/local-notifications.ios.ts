import {
  LocalNotificationRequest, LocalNotificationsOptions,
} from './local-notifications.shared'

import {
  AbstractLocalNotifications,
  debug as abstractDebug,
  LocalNotificationsError,
} from './local-notifications.abstract'

import {
  DelegateObserver,
  SharedNotificationDelegate,
} from '@nativescript/shared-notification-delegate'

/* Prefix debug and error output with '(ios)' */
const debug = abstractDebug.bind(null, '(ios)')

export class LocalNotifications extends AbstractLocalNotifications implements DelegateObserver {
  constructor(options?: LocalNotificationsOptions) {
    super(options)
    SharedNotificationDelegate.addObserver(this)
  }

  /* ======================================================================== */

  private get notificationCenter() {
    return UNUserNotificationCenter.currentNotificationCenter()
  }

  /* ======================================================================== */

  userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(
    center: UNUserNotificationCenter,
    response: UNNotificationResponse,
    completionHandler: () => void,
    next: () => void,
  ): void {
    const dictionary = response.notification?.request?.content?.userInfo
    const json = dictionary?.valueForKey('$juitLocalNotification')
    if (json) {
      debug('Handling notification', response.notification.request.identifier)
      try {
        this.notify({
          id: response.notification.request.identifier,
          title: response.notification.request.content.title,
          message: response.notification.request.content.body,
          data: JSON.parse(json),
        })
        completionHandler()
      } catch (error) {
        debug('Error handling notification', response.notification.request.identifier, error)
        next()
      }
    } else {
      debug('Ignoring notification', response.notification?.request?.identifier)
      next()
    }
  }

  userNotificationCenterWillPresentNotificationWithCompletionHandler(
    center: UNUserNotificationCenter,
    notification: UNNotification,
    completionHandler: (options: UNNotificationPresentationOptions) => void,
    next: () => void,
  ): void {
    const dictionary = notification?.request?.content?.userInfo
    if (dictionary?.valueForKey('$juitLocalNotification') != true) {
      debug('Ignoring notification', notification?.request?.identifier)
      next()
    } else {
      debug('Presenting notification', notification.request.identifier)
      completionHandler(UNNotificationPresentationOptions.Alert | UNNotificationPresentationOptions.Sound)
    }
  }

  /* ======================================================================== */

  scheduleNative(notification: LocalNotificationRequest, seconds: number) {
    return new Promise<string | void>((resolve, reject) => {
      // eslint-disable-next-line new-cap
      const id = NSUUID.UUID().UUIDString.toUpperCase()

      // First of all we request the permission, before anything else...
      debug('Requesting permission for notification', id)
      this.notificationCenter.requestAuthorizationWithOptionsCompletionHandler(
        UNAuthorizationOptions.Alert | UNAuthorizationOptions.Sound,
        (result, error) => {
          if (error) return reject(new LocalNotificationsError('Error requesting permissions', error))
          if (! result) {
            debug('Local Notification authorization request denied')
            return resolve()
          }

          // Now we can start building our notification
          const { title, message } = notification

          // Title and body come straight from the request
          const content = UNMutableNotificationContent.new()
          if (title) content.title = title
          content.body = message

          // Set the "userInfo" dictionary from our notification data
          const json = JSON.stringify(notification.data || {})
          const dictionary = NSDictionary.dictionaryWithObjectForKey(json, '$juitLocalNotification')
          content.userInfo = dictionary

          // Create a trigger, the iOS notification request...
          const trigger = UNTimeIntervalNotificationTrigger.triggerWithTimeIntervalRepeats(seconds, false)
          const request = UNNotificationRequest.requestWithIdentifierContentTrigger(id, content, trigger)

          // ... and finaly schedule natively!
          debug('Scheduling notification', id, 'in', seconds, 'sec.')
          this.notificationCenter.addNotificationRequestWithCompletionHandler(request, (error) => {
            if (error) return reject(new LocalNotificationsError('Error scheduling notification', error))
            return resolve(id)
          })
        })
    })
  }

  cancel(id: string): Promise<void> {
    return new Promise<void>((resolve) => {
      debug('Removing notification', id)
      this.notificationCenter.removePendingNotificationRequestsWithIdentifiers([ id ])
      resolve()
    })
  }
}
