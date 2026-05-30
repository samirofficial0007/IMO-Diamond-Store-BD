const userController = require("../controllers/userController");

const userRoutes = {
  getProfile: userController.getProfile,
  updateProfile: userController.updateProfile,
  changeLanguage: userController.changeLanguage,
  deleteAccount: userController.deleteAccount
};

module.exports = userRoutes;
