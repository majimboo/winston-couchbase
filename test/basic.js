'use strict';
/* global describe: false, it: false */

var should = require('chai').should();
var winston = require('winston');
// will expose winston.transports.Couchbase
var winstonCb = require('../');

describe('#winston-couchbase', function() {
  it('can add the transport', function(done) {
    winston.remove(winston.transports.Console);
    winston.add(winston.transports.Couchbase, {
      silent: false
    });
    done();
  });

  it('can log info', function(done) {
    winston.info('infomercial', function() {
      done();
    });
  });

  it('can log info with meta', function(done) {
    winston.info('infomercial', { hello: 'World' }, function() {
      done();
    });
  });
});
