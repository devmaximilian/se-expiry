let τ = require('../src');

τ.load()
  .then(result => {
    console.log('Passed auto test.');
  })
  .catch(error => {
    console.error(error);
  });

τ.fetch()
  .then(data => {
    τ.parse(data)
      .then(stash => {
        stash
          .order('date')
          .then(stash => {
            stash
              .order('length')
              .then(stash => {
                console.log('Passed manual test.');
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
