import {
  LocalNotificationHandler,
  LocalNotificationRequest,
  LocalNotification,
  LocalNotifications,
  LocalNotificationsOptions,
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
 * ERRORS                                                                     *
 * ========================================================================== */
export class LocalNotificationsError extends Error implements NativeScriptError {
  readonly nativeError: any

  constructor(message: string, nativeError?: any) {
    super(message)
    if (nativeError) this.nativeError = nativeError
  }
}

/* ========================================================================== *
 * MAIN LOCAL NOTIFICATIONS ABSTRACTION                                       *
 * ========================================================================== */
export abstract class AbstractLocalNotifications extends LocalNotifications {
  private handlers = new Set<LocalNotificationHandler>()

  constructor(options?: LocalNotificationsOptions) {
    super(options)
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

  protected notify(notification: LocalNotification) {
    this.handlers.forEach((handler) => {
      try {
        handler(notification)
      } catch (error) {
        console.log('Error handling local notification', notification.id, error)
      }
    })
  }

  on(event: 'notification', handler: LocalNotificationHandler): this {
    if (typeof handler !== 'function') throw new Error('Handler must be a function')
    if (event != 'notification') return this
    this.handlers.add(handler)
    return this
  }

  once(event: 'notification', handler: LocalNotificationHandler): this {
    // Wrap the handler ensuring the wrapper is removed after invocation
    const wrapper: LocalNotificationHandler = (notification: LocalNotification) => {
      try {
        handler(notification)
      } finally {
        this.off('notification', wrapper)
      }
    }
    // Enable enable dispatching on the wrapper
    this.on('notification', wrapper)

    // All done
    return this
  }

  off(event: 'notification', handler: LocalNotificationHandler): this {
    if (event != 'notification') return this
    this.handlers.delete(handler)
    return this
  }


  /* ------------------------------------------------------------------------ *
   | ABSTRACT METHODS                                                         |
   * ------------------------------------------------------------------------ */

  abstract cancel(id: string): Promise<void>

  protected abstract scheduleNative(notification: LocalNotificationRequest, seconds: number): Promise<string | void>
}
