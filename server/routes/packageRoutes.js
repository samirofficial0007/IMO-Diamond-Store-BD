const packageController = require("../controllers/packageController");

const packageRoutes = {
  getPackages: packageController.getPackages,
  addPackage: packageController.addPackage,
  updatePackage: packageController.updatePackage,
  deletePackage: packageController.deletePackage
};

module.exports = packageRoutes;
