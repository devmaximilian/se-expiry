let τ = require('../src');

console.log('Fetching...');
τ.fetch()
  .then(data => {
    console.log('Parsing...');
    τ.parse(data)
      .then(stash => {
        console.log('Sorting by date...');
        stash
          .order('date')
          .then(stash => {
            console.log('Sorting by length...');
            stash
              .order('length')
              .then(stash => {
                console.log('Success! All tests passed.');
              })
              .catch(error => {
                console.error(error);
              });
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });

// TODO: Improve tests, avoid pyramid-like code...
