 'use strict';

var AppDispatcher = require('../AppDispatcher');
var AppActionTypes = require('../AppActionTypes');
var SampleStore = require('../Sample/SampleStore');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var AlertStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  isAlert: function() {
    return SampleStore.getLatestSample().activeAlert;
  },

  isAlertable: function() {
    if (this.isAlert()) {
      return false;
    }
    var latestSample = SampleStore.getLatestSample();
    if (!latestSample.state || latestSample.state == 'default') {
      return false;
    }
    return true;
  }

});

AlertStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {

    default:
      // do nothing
  }
});

module.exports = AlertStore;
