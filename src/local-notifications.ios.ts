import {
  LocalNotification,
  LocalNotificationHandler,
  LocalNotificationRequest,
} from './local-notifications.shared'

import {
  AbstractLocalNotifications,
  debug as abstractDebug,
} from './local-notifications.abstract'

/* Prefix debug and error output with '(ios)' */
const debug = abstractDebug.bind(null, '(ios)')

// eslint-disable-next-line new-cap
@NativeClass()
class LocalNotificationsDelegate extends NSObject implements UNUserNotificationCenterDelegate {
  public static ObjCProtocols = [ UNUserNotificationCenterDelegate ];

  private _notificationHandler?: LocalNotificationHandler

  constructor(notificationHandler?: LocalNotificationHandler) {
    super()
    debug('Constructed delegate', !! notificationHandler)
    this._notificationHandler = notificationHandler
  }

  userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(
    center: UNUserNotificationCenter,
    response: UNNotificationResponse,
    completionHandler: () => void,
  ) {
    debug('Handling notification', response.notification.request.identifier)

    const notification: LocalNotification = {
      id: response.notification.request.identifier,
      title: response.notification.request.content.title,
      message: response.notification.request.content.body,
    }

    const dictionary = response.notification.request.content.userInfo
    if (dictionary) {
      const data = dictionary.valueForKey('data')
      if (data) {
        try {
          notification.data = JSON.parse(data)
        } catch (error) {
          console.log('Error parsing data for notification', notification.id, error)
        }
      }
    }

    try {
      this._notificationHandler?.(notification)
    } catch (error) {
      error('Error handling notification', notification.id, error)
    }

    completionHandler()
  }

  userNotificationCenterWillPresentNotificationWithCompletionHandler(
    center: UNUserNotificationCenter,
    notification: UNNotification,
    completionHandler: (options: UNNotificationPresentationOptions) => void,
  ) {
    debug('Presenting notification', notification.request.identifier)
    completionHandler(UNNotificationPresentationOptions.Alert | UNNotificationPresentationOptions.Sound)
  }
}

export class LocalNotifications extends AbstractLocalNotifications {
  private notificationCenter: UNUserNotificationCenter

  constructor() {
    super()

    this.notificationCenter = UNUserNotificationCenter.currentNotificationCenter()
    this.notificationCenter.delegate = new LocalNotificationsDelegate(this._handler)
  }

  scheduleNative(notification: LocalNotificationRequest, seconds: number) {
    return new Promise<string>((resolve, reject) => {
      const { title, message } = notification

      const content = UNMutableNotificationContent.new()
      content.title = title
      content.body = message

      const data = JSON.stringify(notification.data || {})
      content.userInfo = NSDictionary.dictionaryWithObjectsForKeys([ data ], [ 'data' ])

      const trigger = UNTimeIntervalNotificationTrigger.triggerWithTimeIntervalRepeats(seconds, false)

      // eslint-disable-next-line new-cap
      const id = NSUUID.UUID().UUIDString.toUpperCase()
      const request = UNNotificationRequest.requestWithIdentifierContentTrigger(id, content, trigger)

      debug('Requesting permission for notification', id)
      this.notificationCenter.requestAuthorizationWithOptionsCompletionHandler(
        UNAuthorizationOptions.Alert | UNAuthorizationOptions.Sound,
        (result, error) => {
          if (error) return reject(error)
          if (! result) return reject(new Error('Local Notification authorization request denied'))

          debug('Scheduling notification', id, 'in', seconds, 'sec.')
          this.notificationCenter.addNotificationRequestWithCompletionHandler(request, (error) => {
            if (error) return reject(error)
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
