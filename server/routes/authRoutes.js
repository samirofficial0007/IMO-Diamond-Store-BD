const authController = require("../controllers/authController");

const authRoutes = {
  register: authController.register,
  login: authController.login,
  googleLogin: authController.googleLogin,
  logout: authController.logout
};

module.exports = authRoutes;
