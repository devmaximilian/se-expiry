class Domain {
  constructor(name, expiry) {
    this.name = name;
    this.expiry = new Date(expiry);
  }
}

module.exports = Domain;
