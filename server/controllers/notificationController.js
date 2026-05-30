const Notification = require("../models/Notification");

const sendNotification = (req, res) => {
  res.json({
    success: true,
    message: "Send Notification endpoint ready"
  });
};

const getUserNotifications = (req, res) => {
  res.json({
    success: true,
    message: "Get User Notifications endpoint ready"
  });
};

const markAsRead = (req, res) => {
  res.json({
    success: true,
    message: "Mark As Read endpoint ready"
  });
};

const deleteNotification = (req, res) => {
  res.json({
    success: true,
    message: "Delete Notification endpoint ready"
  });
};

module.exports = {
  sendNotification,
  getUserNotifications,
  markAsRead,
  deleteNotification
};
