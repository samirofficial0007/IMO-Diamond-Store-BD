class PaymentSetting {
  constructor() {
    this.bkashNumber = "";

    this.nagadNumber = "";

    this.binancePayId = "895171022";

    this.bkashInstructions =
      "Send payment using bKash and enter your Transaction ID.";

    this.nagadInstructions =
      "Send payment using Nagad and enter your Transaction ID.";

    this.binanceInstructions =
      "Send payment using Binance Pay and enter your Binance Order ID.";

    this.updatedAt = new Date();
  }
}

module.exports = PaymentSetting;
