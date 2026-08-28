// Notifications [ Email , SMS , In-App]

// Creator Class
class Notification {
  send(message) {
    throw new Error("send() must be implementd");
  }
}

// Email Notification (Concrete creator)
class EmailNotification extends Notification {
  constructor() {
    super();
  }

  // My own implementation for send method
  send(message) {
    console.log(`Sending Email Notification : ${message}`);
  }
}

// SMS Notification (Concrete creator)
class SMSNotification extends Notification {
  constructor() {
    super();
  }

  // My own implementation for send method
  send(message) {
    console.log(`Sending SMS Notification : ${message}`);
  }
}

// In-App Notification (Concrete creator)
class InAppNotification extends Notification {
  constructor() {
    super();
  }

  // My own implementation for send method
  send(message) {
    console.log(`Sending In-App Notification : ${message}`);
  }
}
class NotificationFactory {
  static create(type) {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "app":
        return new InAppNotification();
      default:
        throw new Error(`Unknown Notification Type ${type}`);
    }
  }
}

// --------- Client Code ---------

const notification = NotificationFactory.create("email");
notification.send("Salam Omar");
