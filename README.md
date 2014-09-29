winston-couchbase
=================

[![NPM](https://nodei.co/npm/winston-couchbase.png?downloads=true)](https://nodei.co/npm/winston-couchbase/)

A Couchbase transport for [winston][0].

Installation
------------

    $ npm install winston
    $ npm install winston-couchbase --save

Usage
-----
    var winston = require('winston');
    // exposes `winston.transports.Couchbase`
    var winstonCb = require('winston-couchbase');
    winston.add(winston.transports.Couchbase, options);

Options
-------

- level *(default: info)*: level of the message this transport should log.
- bucket *(default: default)*: bucket where to store logs.
- prefix *(default: wl)*: prefix of your keys.
- host *(default: 127.0.0.1:8091)*: address of the couchbase server.

TODO
----

- Use a single document to store all logs

[0]: https://github.com/flatiron/winston
