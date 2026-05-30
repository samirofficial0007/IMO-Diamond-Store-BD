class Package {
  constructor() {
    this.id = "";

    this.diamondAmount = 0;

    this.price = 0;

    this.isActive = true;

    this.createdAt = new Date();

    this.updatedAt = new Date();
  }
}

module.exports = Package;
