# winston

A Couchbase transport for [winston][0].

## Usage
``` js
  var winston = require('winston');

  var CouchTransport = require('winston-couchbase');

  winston.add(CouchTransport, options);
```

[0]: https://github.com/flatiron/winston
