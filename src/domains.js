class Domains {
  constructor(items) {
    this.items = items;
  }

  // Sort domains by expires date (ascending)
  _byDate(a, b) {
    return a.expires - b.expires;
  }

  // Sort domains by domain name length (ascending)
  _byLength(a, b) {
    return a.name.length - b.name.length;
  }

  // Internal sort interface
  _sort(by) {
    return new Promise((resolve, reject) => {
      try {
        this.items.sort(by);
        resolve(this);
      } catch (error) {
        reject(error);
      }
    });
  }

  // External sort interface
  order(by = 'date') {
    switch (by) {
      case 'date':
        return this._sort(this._byDate);
      case 'length':
        return this._sort(this._byLength);
      default:
        return this.sort(this._byDate);
    }
  }
}

module.exports = Domains;
