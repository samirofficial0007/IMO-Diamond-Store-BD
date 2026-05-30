const User = require("../models/User");

const register = (req, res) => {
  res.json({
    success: true,
    message: "Register endpoint ready"
  });
};

const login = (req, res) => {
  res.json({
    success: true,
    message: "Login endpoint ready"
  });
};

const googleLogin = (req, res) => {
  res.json({
    success: true,
    message: "Google Login endpoint ready"
  });
};

const logout = (req, res) => {
  res.json({
    success: true,
    message: "Logout endpoint ready"
  });
};

module.exports = {
  register,
  login,
  googleLogin,
  logout
};
