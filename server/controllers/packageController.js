const Package = require("../models/Package");

const getPackages = (req, res) => {
  res.json({
    success: true,
    message: "Get Packages endpoint ready"
  });
};

const addPackage = (req, res) => {
  res.json({
    success: true,
    message: "Add Package endpoint ready"
  });
};

const updatePackage = (req, res) => {
  res.json({
    success: true,
    message: "Update Package endpoint ready"
  });
};

const deletePackage = (req, res) => {
  res.json({
    success: true,
    message: "Delete Package endpoint ready"
  });
};

module.exports = {
  getPackages,
  addPackage,
  updatePackage,
  deletePackage
};
