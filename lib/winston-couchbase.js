'use strict';

var util = require('util');
var uuid = require('node-uuid');
var winston = require('winston');
var couchbase = require('couchbase');

var Couchbase  = winston.transports.Couchbase = function (options) {
  winston.Transport.call(this, options);
  options = (options || {});

  var self = this;

  this.name     = 'couchbase';
  this.level    = (options.level || 'info');
  this.silent   = (options.silent || false);
  this.host     = (options.host || 'localhost:8091');
  this.bucket   = (options.bucket || 'default');
  this.password = (options.password || null);
  this.prefix   = (options.prefix || 'wl');

  this.$client = new couchbase.Connection({
    bucket: this.bucket,
    host: this.host,
    password: this.password
  }, function(err) {});
};

util.inherits(Couchbase, winston.Transport);
exports.Couchbase = Couchbase;
module.exports = Couchbase;

/**
 *
 */
Couchbase.prototype.log = function (level, msg, meta, callback) {
  var self = this;

  process.nextTick(function () {
    if (!!self.silent) {
      return callback(null, true);
    }

    var doc = {};
    doc.message = msg;
    doc.timestamp = Date.now();
    doc.level = level;
    doc.meta = meta;

    var docId = self.prefix + '_' + uuid.v4();

    self.$client.add(docId, doc, function(err) {
      if(!!err) {
        self.emit('error', err);
        return callback(err);
      }

      self.emit('logged');
      callback(null, true);
    });
  });
};
