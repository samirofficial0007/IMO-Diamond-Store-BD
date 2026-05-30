class Admin {
  constructor() {
    this.id = "";

    this.username = "";

    this.email = "";

    this.role = "admin";

    this.permissions = [
      "manage_orders",
      "manage_packages",
      "manage_payments",
      "manage_users",
      "manage_notifications",
      "manage_settings"
    ];

    this.lastLogin = null;

    this.createdAt = new Date();
  }
}

module.exports = Admin;
