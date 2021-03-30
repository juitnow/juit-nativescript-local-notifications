import {
  LocalNotificationHandler,
  LocalNotificationRequest,
  LocalNotification,
  LocalNotifications,
} from './local-notifications.shared'

/* ========================================================================== *
 * DEBUGGING                                                                  *
 * ========================================================================== */
let debugEnabled = false // default, no debug

export function debug(...args: any[]) {
  if (debugEnabled) {
    const ts = new Date().toISOString().substr(11, 12)
    console.log('[LocalNotifications]', ts, ...args)
  }
}

/* ========================================================================== *
 * NOTIFICATION HANDLING                                                      *
 * -------------------------------------------------------------------------- *
 * The handler that will be used to handle all notifications must be "static" *
 * (not an instance variable). This is because iOS seem to re-instantiate its *
 * `LocalNotificationsDelegate` at will, and loosing instance variables.      *
 *                                                                            *
 * I still have to figure out _how_ that happens (constructor doesn't seem to *
 * be called, and we specify the delegate instance), but keeping a big shared *
 * handler solves the problem for now.                                        *
 *                                                                            *
 * The real, only issue with this approach is that, while we can have as many *
 * instances of `LocalNotifications` as we want, a listener registered on one *
 * specific instance will be notified also of notifications from the others.  *
 *                                                                            *
 * I guess we can live with this...                                           *
 * ========================================================================== */

const sharedNotificationHandlers = new Set<LocalNotificationHandler>()

export const sharedNotificationHandler: LocalNotificationHandler =
  (notification: LocalNotification) =>
    sharedNotificationHandlers.forEach((handler) => {
      try {
        handler(notification)
      } catch (error) {
        console.log('Error handling local notification', notification.id, error)
      }
    })

/* ========================================================================== *
 * MAIN LOCAL NOTIFICATIONS ABSTRACTION                                       *
 * ========================================================================== */
export abstract class AbstractLocalNotifications extends LocalNotifications {
  constructor() {
    super()
  }

  /* ------------------------------------------------------------------------ *
   | DEBUGGING INSTRUMENTATION                                                |
   * ------------------------------------------------------------------------ */

  /** Enable/disable debugging */
  static set debugEnabled(enabled: boolean) {
    debugEnabled = !!enabled
  }

  /** Check status of debugging flag */
  static get debugEnabled() {
    return debugEnabled
  }

  /* ------------------------------------------------------------------------ *
   | IMPLEMENTED METHODS                                                      |
   * ------------------------------------------------------------------------ */

  schedule(notification: LocalNotificationRequest, when: Date | number): Promise<string | void> {
    if (typeof when === 'number') {
      if (when > 0) return this.scheduleNative(notification, when)
      else return Promise.resolve()
    }

    if (when instanceof Date) {
      const seconds = Math.round((when.getTime() - Date.now()) / 1000)
      if (seconds > 0) return this.scheduleNative(notification, seconds)
      else return Promise.resolve()
    }

    return Promise.reject(new TypeError('LocalNotifications.schedule() must be called with number or date'))
  }

  /* ------------------------------------------------------------------------ *
   | EVENTS                                                                   |
   * ------------------------------------------------------------------------ */

  on(event: 'localNotification', handler: LocalNotificationHandler): this {
    if (typeof handler !== 'function') throw new Error('Handler must be a function')
    if (event != 'localNotification') return this
    sharedNotificationHandlers.add(handler)
    return this
  }

  once(event: 'localNotification', handler: LocalNotificationHandler): this {
    // Wrap the handler ensuring the wrapper is removed after invocation
    const wrapper: LocalNotificationHandler = (notification: LocalNotification) => {
      try {
        handler(notification)
      } finally {
        this.off('localNotification', wrapper)
      }
    }
    // Enable enable dispatching on the wrapper
    this.on('localNotification', wrapper)

    // All done
    return this
  }

  off(event: 'localNotification', handler: LocalNotificationHandler): this {
    if (event != 'localNotification') return this
    sharedNotificationHandlers.delete(handler)
    return this
  }


  /* ------------------------------------------------------------------------ *
   | ABSTRACT METHODS                                                         |
   * ------------------------------------------------------------------------ */

  abstract cancel(id: string): Promise<void>

  protected abstract scheduleNative(notification: LocalNotificationRequest, seconds: number): Promise<string | void>
}
