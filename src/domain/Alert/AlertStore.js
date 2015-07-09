 'use strict';

var AppDispatcher = require('../AppDispatcher');
var AppActions = require('../AppActions');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var _isAlert = false;

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
    return _isAlert;
  }

});

AlertStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {

    case AppActions.ALERT_ACTIVATED:
      _isAlert = true;
      AlertStore.emitChange();
      break;

    case AppActions.ALERT_DEACTIVATED:
      _isAlert = false;
      AlertStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = AlertStore;