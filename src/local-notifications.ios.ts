import {
  LocalNotification,
  LocalNotificationRequest,
} from './local-notifications.shared'

import {
  AbstractLocalNotifications,
  debug as abstractDebug,
  sharedNotificationHandler,
} from './local-notifications.abstract'

/* Prefix debug and error output with '(ios)' */
const debug = abstractDebug.bind(null, '(ios)')

// eslint-disable-next-line new-cap
@NativeClass()
class LocalNotificationsDelegate extends NSObject implements UNUserNotificationCenterDelegate {
  public static ObjCProtocols = [ UNUserNotificationCenterDelegate ];

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
      data: {},
    }

    const dictionary = response.notification.request.content.userInfo
    if (dictionary) {
      const keys = dictionary.allKeys
      for (let i = 0; i < keys.count; i ++) {
        const key = keys.objectAtIndex(i)
        const value = dictionary.valueForKey(key)
        notification.data[key] = value
      }
    }

    sharedNotificationHandler(notification)
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
    this.notificationCenter.delegate = new LocalNotificationsDelegate()
  }

  scheduleNative(notification: LocalNotificationRequest, seconds: number) {
    return new Promise<string>((resolve, reject) => {
      // eslint-disable-next-line new-cap
      const id = NSUUID.UUID().UUIDString.toUpperCase()

      // First of all we request the permission, before anything else...
      debug('Requesting permission for notification', id)
      this.notificationCenter.requestAuthorizationWithOptionsCompletionHandler(
        UNAuthorizationOptions.Alert | UNAuthorizationOptions.Sound,
        (result, error) => {
          if (error) return reject(error)
          if (! result) {
            debug('Local Notification authorization request denied')
            return
          }

          // Now we can start building our notification
          const { title, message } = notification

          // Title and body come straight from the request
          const content = UNMutableNotificationContent.new()
          if (title) content.title = title
          content.body = message

          // Set the "userInfo" dictionary from our notification data
          content.userInfo = NSDictionary.dictionaryWithDictionary(<any> (notification.data || {}))

          // Create a trigger, the iOS notification request...
          const trigger = UNTimeIntervalNotificationTrigger.triggerWithTimeIntervalRepeats(seconds, false)
          const request = UNNotificationRequest.requestWithIdentifierContentTrigger(id, content, trigger)

          // ... and finaly schedule natively!
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
