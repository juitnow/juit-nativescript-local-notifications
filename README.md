# Minimalistic Local Notifications for NativeScript 7

This package implements a minimalistic helper to schedule and cancel local
notifications on iOS and Android.

* [Usage](#usage)
* [Scheduling notifications](#scheduling-notifications)
* [Canceling a scheduled notification](#canceling-a-scheduled-notification)
* [Subscribing to notifications](#subscribing-to-notifications)
* [Copyright Notice](NOTICE.md)
* [License](LICENSE.md)


## Usage

The local notifications plugin should be easily instantiated by simply calling
its constructor

```typescript
import { LocalNotifications } from '@juit/nativescript-local-notifications'

const localNotifications = new LocalNotifications({
  androidIcon: 'icon_notification',
  androidColor: 0x0FF0000,
})
```


## Scheduling notifications

A local notification can be scheduled using the `schedule(...)` method with
a `LocalNotificationRequest` and a `Date` or the _number_ of seconds to wait
before displaying the notification:

```typescript
const notificationId = await localNotifications.schedule({
  title: 'The title',
  message: 'The message for the notification...',
  data: {
    // Optional, this is a payload that will be
    // returned when the notification is opened
  }
}, 10) // schedule in 10 seconds...
```

The `schedule(...)` method will return a `Promise` which will resolve to the
`string` _id_ of the scheduled notification.


## Canceling a scheduled notification

A scheduled notification can be _canceled_ (and therefore will no longer be
presented to the user) by using the `cancel(...)` method:

```typescript
localNotifications.cancel(notificationId)
```


## Subscribing to notifications

When a notification is opened by a user, the `localNotification` event will be
emitted by the `LocalNotifications` instance. The usual `on(...)`, `once(...)`
and `off(...)` methods are available to manage subscription:

```typescript
localNotifications.on('localNotification', (notification) => {
  console.log('Notification opened', notification)
})

// Notification opened: {
//   id: '0ecfd51b-6e83-46a9-8b6d-61632bf91db3',
//   title: 'The title',
//   message: 'The message for the notification...',
//   data: { ... }
// }
}
```
