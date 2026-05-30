class Notification {
  constructor() {
    this.id = "";

    this.userId = "";

    this.title = "";

    this.message = "";

    this.type = "general";
    // general
    // order_completed
    // processing
    // payment_not_found
    // new_offer
    // admin_notice

    this.isRead = false;

    this.createdAt = new Date();
  }
}

module.exports = Notification;
