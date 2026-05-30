const Order = require("../models/Order");

const createOrder = (req, res) => {
  res.json({
    success: true,
    message: "Create Order endpoint ready"
  });
};

const getUserOrders = (req, res) => {
  res.json({
    success: true,
    message: "Get User Orders endpoint ready"
  });
};

const updateOrderStatus = (req, res) => {
  res.json({
    success: true,
    message: "Update Order Status endpoint ready"
  });
};

const approveOrder = (req, res) => {
  res.json({
    success: true,
    message: "Approve Order endpoint ready"
  });
};

const paymentNotFound = (req, res) => {
  res.json({
    success: true,
    message: "Payment Not Found endpoint ready"
  });
};

module.exports = {
  createOrder,
  getUserOrders,
  updateOrderStatus,
  approveOrder,
  paymentNotFound
};
