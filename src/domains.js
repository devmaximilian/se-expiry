class Domains {
  constructor(items) {
    this.items = items;
  }

  // Sort domains by expiry date (ascending)
  byDate(a, b) {
    return a.expiry - b.expiry;
  }

  // Sort domains by domain name length (ascending)
  byLength(a, b) {
    return a.name.length - b.name.length;
  }

  // Internal sort interface
  sort(by) {
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
        return this.sort(this.byDate);
      case 'length':
        return this.sort(this.byLength);
      default:
        return this.sort(this.byDate);
    }
  }
}

module.exports = Domains;
