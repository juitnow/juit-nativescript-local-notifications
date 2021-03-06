/* eslint-disable @typescript-eslint/no-empty-interface */

/** A type describing all allowable JSON primitives */
export type JSONPrimitive = string | number | boolean | null
/** A TypeScript representation of a JSON object */
export interface JSONObject extends Record<string, JSONPrimitive | JSONArray | JSONObject> {}
/** A TypeScript representation of a JSON array */
export interface JSONArray extends Array<JSONPrimitive | JSONArray | JSONObject> {}

/**
 * The `LocalNotificationRequest` interface describes a request to display
 * a local notification to the user.
 */
export interface LocalNotificationRequest {
  title?: string,
  message: string,
  data?: JSONObject,
}

/**
 * The `LocalNotification` interface describes all details related to a local
 * notification displayed to the user.
 */
export interface LocalNotification extends LocalNotificationRequest {
  id: string,
  data: JSONObject
}

/**
 * A `LocalNotificationHandler` identifies a function handling the action from
 * users on a local notification (when a notification is opened).
 */
export type LocalNotificationHandler = (notification: LocalNotification) => void

/**
 * Options (relevant only for Android) to display local notifications.
 */
export interface LocalNotificationsOptions {
  /**
   * The _name_ of an Android _drawable_ resource to be used when displaying
   * the local notification.
   *
   * This defaults to the application's own _icon_ if no such drawable resource
   * was found in the current package.
   *
   * For the best results, this should be a 24x24 dip image (with a 1 dip
   * border, so the icon should really be a maximum of 22x22 dip).
   *
   * The image should be _monochromatic_ using only _white_ (`#fffff`) and the
   * alpha channel to distinguish between foreground and background.
   */
  androidIcon?: string,
  /**
   * The _color_ as an _RGB_ value (e.g. `0x0ff0000` for _red_) to use to
   * colorize the foreground of the icon.
   */
  androidColor?: number,
}

/**
 * The `LocalNotifications` interface defines a way to schedule and cancel
 * local notifications.
 */
export interface LocalNotifications {
  /** Schedule a local notification request, and return a `Promise` to its ID */
  schedule(notification: LocalNotificationRequest, seconds: number): Promise<string | void>
  /** Schedule a local notification request, and return a `Promise` to its ID */
  schedule(notification: LocalNotificationRequest, date: Date): Promise<string | void>
  /** Cancel a request to display a local notification associated with an ID */
  cancel(id: string): Promise<void>

  /** Set up a handler called every time a local notification is activated. */
  on(event: 'notification', handler: LocalNotificationHandler): this
  /** Set up a handler called once when a local notification is activated. */
  once(event: 'notification', handler: LocalNotificationHandler): this
  /** Remove the specified handler. */
  off(event: 'notification', handler: LocalNotificationHandler): this
}

/**
 * The `LocalNotifications` class provides a generic constructor for.
 */
export class LocalNotifications implements LocalNotifications {
  /** A flag to enable/disable debug */
  static debugEnabled: boolean
  /** The options we were constructed with */
  readonly options: Readonly<LocalNotificationsOptions>

  /**
   * Construct a new `LocalNotifications` instance.
   */
  constructor(options?: LocalNotificationsOptions) {
    this.options = Object.freeze(Object.assign({}, options))
  }
}
