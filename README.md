winston-couchbase [![Build Status](https://travis-ci.org/majimboo/winston-couchbase.svg?branch=master)](https://travis-ci.org/majimboo/winston-couchbase)
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

- __level__: level of the message this transport should log. *(default: info)*
- __bucket__: bucket where to store logs. *(default: default)*
- __prefix__: prefix of your keys. *(default: wl)*
- __host__: address of the couchbase server. *(default: 127.0.0.1:8091)*

[0]: https://github.com/flatiron/winston
