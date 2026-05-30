class User {
  constructor() {
    this.id = "";
    this.username = "";
    this.email = "";
    this.password = "";

    this.googleAccount = false;

    this.role = "user";

    this.language = "en";

    this.notifications = [];

    this.orders = [];

    this.createdAt = new Date();
  }
}

module.exports = User;
