const paymentController = require("../controllers/paymentController");

const paymentRoutes = {
  getPaymentSettings: paymentController.getPaymentSettings,
  updateBkashNumber: paymentController.updateBkashNumber,
  updateNagadNumber: paymentController.updateNagadNumber,
  updateBinancePayId: paymentController.updateBinancePayId,
  validateTransactionId: paymentController.validateTransactionId
};

module.exports = paymentRoutes;
