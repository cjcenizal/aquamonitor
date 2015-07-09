 'use strict';

var AppDispatcher = require('../AppDispatcher');
var AppActions = require('../AppActions');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var _samples = [];

function _addSample(sample) {

}

function _setAlertOnSample(sample) {

}

function _pageNext() {

}

function _pagePrevious() {
  
}

var SampleStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getSamples: function() {
    return _samples;
  }

});

SampleStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {

    case AppActions.SAMPLE_ADDED:
      _addSample(action.sample);
      SampleStore.emitChange();
      break;

    case AppActions.ALERT_ACTIVATED:
      _setAlertOnSample(action.sample);
      SampleStore.emitChange();
      break;

    case AppActions.NEXT_PAGED:
      _pageNext();
      SampleStore.emitChange();
      break;

    case AppActions.PREVIOUS_PAGED:
      _pagePrevious();
      SampleStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = SampleStore;
