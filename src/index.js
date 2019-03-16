module.exports = {
  fetch: require('./fetch'),
  classes: {
    Domain: require('./domain'),
    Domains: require('./domain')
  },
  parse: require('./parse'),
  load: (sort = true) => {
    return new Promise((resolve, reject) => {
      require('./fetch')()
        .then(_response => {
          require('./parse')(_response)
            .then(_result => {
              if (sort) {
                _result
                  .order('length')
                  .then(resolve)
                  .catch(reject);
              } else {
                resolve(_result);
              }
            })
            .catch(reject);
        })
        .catch(reject);
    });
  }
};
