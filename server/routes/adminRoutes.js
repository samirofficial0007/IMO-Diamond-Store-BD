const adminController = require("../controllers/adminController");

const adminRoutes = {
  adminLogin: adminController.adminLogin,
  getDashboardStats: adminController.getDashboardStats,
  getSiteSettings: adminController.getSiteSettings,
  updateSiteSettings: adminController.updateSiteSettings,
  enableMaintenance: adminController.enableMaintenance,
  disableMaintenance: adminController.disableMaintenance
};

module.exports = adminRoutes;
