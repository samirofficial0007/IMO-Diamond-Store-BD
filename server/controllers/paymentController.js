const PaymentSetting = require("../models/PaymentSetting");

const getPaymentSettings = (req, res) => {
  res.json({
    success: true,
    message: "Get Payment Settings endpoint ready"
  });
};

const updateBkashNumber = (req, res) => {
  res.json({
    success: true,
    message: "Update bKash Number endpoint ready"
  });
};

const updateNagadNumber = (req, res) => {
  res.json({
    success: true,
    message: "Update Nagad Number endpoint ready"
  });
};

const updateBinancePayId = (req, res) => {
  res.json({
    success: true,
    message: "Update Binance Pay ID endpoint ready"
  });
};

const validateTransactionId = (req, res) => {
  res.json({
    success: true,
    message: "Validate Transaction ID endpoint ready"
  });
};

module.exports = {
  getPaymentSettings,
  updateBkashNumber,
  updateNagadNumber,
  updateBinancePayId,
  validateTransactionId
};
