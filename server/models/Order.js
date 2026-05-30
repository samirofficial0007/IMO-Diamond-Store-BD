class Order {
  constructor() {
    this.id = "";

    this.userId = "";

    this.imoId = "";

    this.diamondAmount = 0;

    this.price = 0;

    this.paymentMethod = "";

    this.transactionId = "";

    this.binanceOrderId = "";

    this.screenshot = "";

    this.status = "pending";
    // pending
    // processing
    // completed
    // payment_not_found

    this.adminNote = "";

    this.createdAt = new Date();

    this.updatedAt = new Date();
  }
}

module.exports = Order;
