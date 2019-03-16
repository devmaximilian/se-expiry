let fetch = (https = true) => {
  return new Promise((resolve, reject) => {
    let http = https ? require('https') : require('http');

    // Send request
    http
      .get(
        'https://data.internetstiftelsen.se/bardate_domains.txt',
        response => {
          let data = '';

          // Append retrived data
          response.on('data', chunk => {
            data += chunk;
          });

          // Resolve promise when data ends
          response.on('end', () => {
            resolve(data);
          });
        }
      )
      .on('error', reject);
  });
};

module.exports = fetch;
