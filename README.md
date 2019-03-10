# SE Expiry

A simple wrapper to get the list of `.se` domains expiring soon. Everything is Promise-based.

Data fetched from [Internetstiftelsen](https://internetstiftelsen.se/).

### Example usage

Simple example using the wrapper.

```javascript
const expiry = require('se-expiry');

expiry
  .fetch()
  .then(data => {
    expiry
      .parse(data)
      .then(stash => {
        // Instance of Domains
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });
```

Once there is an instance of the `Domains`-class, the `order(by = 'date')` method can be used to sort domains by date or length.
