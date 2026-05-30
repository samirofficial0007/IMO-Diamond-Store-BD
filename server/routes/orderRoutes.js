const orderController = require("../controllers/orderController");

const orderRoutes = {
  createOrder: orderController.createOrder,
  getUserOrders: orderController.getUserOrders,
  updateOrderStatus: orderController.updateOrderStatus,
  approveOrder: orderController.approveOrder,
  paymentNotFound: orderController.paymentNotFound
};

module.exports = orderRoutes;
