class Domain {
  constructor(name, expires) {
    this.name = name;
    this.expires = new Date(expires);
  }
}

module.exports = Domain;
