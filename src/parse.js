const Domain = require('./domain');
const Domains = require('./domains');

// Converts raw response to domain array
let parse = raw => {
  return new Promise((resolve, reject) => {
    let domains = [];

    raw.split(/\n/g).forEach(item => {
      item = item.split(/\t/g);

      // Make sure item is not a blank line (last line of data will cause this to trigger)
      if (item.length === 1 && item[0] === '') {
        return;
      }

      // Make sure domain name and date are present
      if (item.length < 2) {
        reject(new Error('Parsing failed: Incomplete data'));
      }

      // ... and that they're not null, undefined or false
      if (!item[0] | !item[1]) {
        reject(new Error('Parsing failed: Unexpected value'));
      }

      // ... nor empty strings
      if (!item[0].length || !item[1].length) {
        reject(new Error('Parsing failed: Empty value'));
      }

      // ... nor empty strings with blankspaces
      if (
        !item[0].replace(/\s/g, '').length ||
        !item[1].replace(/\s/g, '').length
      ) {
        reject(new Error('Parsing failed: Empty value (whitespace)'));
      }

      // Create domain instance
      let domain = new Domain(item[0], item[1]);

      // Append domain instance
      domains.push(domain);
    });

    resolve(new Domains(domains));
  });
};

module.exports = parse;
