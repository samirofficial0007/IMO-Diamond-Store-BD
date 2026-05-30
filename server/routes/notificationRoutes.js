const notificationController = require("../controllers/notificationController");

const notificationRoutes = {
  sendNotification: notificationController.sendNotification,
  getUserNotifications: notificationController.getUserNotifications,
  markAsRead: notificationController.markAsRead,
  deleteNotification: notificationController.deleteNotification
};

module.exports = notificationRoutes;
