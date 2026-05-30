const User = require("../models/User");

const getProfile = (req, res) => {
  res.json({
    success: true,
    message: "Get Profile endpoint ready"
  });
};

const updateProfile = (req, res) => {
  res.json({
    success: true,
    message: "Update Profile endpoint ready"
  });
};

const changeLanguage = (req, res) => {
  res.json({
    success: true,
    message: "Change Language endpoint ready"
  });
};

const deleteAccount = (req, res) => {
  res.json({
    success: true,
    message: "Delete Account endpoint ready"
  });
};

module.exports = {
  getProfile,
  updateProfile,
  changeLanguage,
  deleteAccount
};
