# SE Expiry

A simple wrapper to get the list of `.se` domains expiring soon. Built with Promises in mind.

Data fetched from [Internetstiftelsen](https://internetstiftelsen.se/).

### Example usage

#### Simple usage example

```javascript
const expiry = require('se-expiry');

expiry
  .load()
  .then(domains => {
    // Do something
  })
  .catch(error => {
    // Handle error
  });
```

#### Manual usage example

```javascript
const expiry = require('se-expiry');

expiry
  .fetch()
  .then(data => {
    expiry
      .parse(data)
      .then(domains => {
        // Do something
      })
      .catch(error => {
        // Handle parse error
      });
  })
  .catch(error => {
    // Handle fetch error
  });
```

### Documentation

Any functions/methods prefixed with an underscore are not intended to be called manually.

#### Class: Domain

```javascript
class Domain {

  // Class constructor
  constructor(:name = String, :expires = Date)

}
```

#### Class: Domains (collection)

```javascript
class Domains {

  // Class constructor
  constructor(:items = [Domain])

  // Sorting function (sorts by date)
  _byDate(:a = Domain, :b = Domain) // => Bool

  // Sorting function (sorts by name length)
  _byLength(:a = Domain, :b = Domain) // => Bool

  // Sort interface (called by order method)
  _sort(:by = Function) // => Promise

  // Order method (by accepts 'date' or 'length', fallback is 'date')
  order(:by = String) // => Promise
}
```

#### Function: fetch

```javascript
// Fetch function (https fallback is true)
fetch(:https = Bool) // => Promise
```

#### Function: parse

```javascript
// Parse function (https fallback is true)
fetch(:raw = String) // => Promise
```
