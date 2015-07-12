 'use strict';

var Sample = require('./Sample');

var AppDispatcher = require('../AppDispatcher');
var AppActionTypes = require('../AppActionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var _samples = [];
var _page = 0;
var SAMPLES_PER_PAGE = 10;

function _addSamples(sampleData) {
  _.each(sampleData, function(data) {
    var sample = new Sample(
      data.id,
      data.time,
      data.activeAlert,
      data.readings
    );
    _samples.push(sample);
  });
}

function _setAlertOnSample(sampleId) {

}

function _hasNextPage() {
  return _samples.length > (_page + 1) * SAMPLES_PER_PAGE;
}

function _hasPreviousPage() {
  return _page > 0;
}

function _pageNext() {
  if (_hasNextPage()) {
    _page++;
  }
}

function _pagePrevious() {
  if (_hasPreviousPage()) {
    _page--;
  }
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

  hasNextPage: _hasNextPage,

  hasPreviousPage: _hasPreviousPage,

  getSamples: function() {
    var index = _page * SAMPLES_PER_PAGE;
    var endIndex = (_samples.length > index + SAMPLES_PER_PAGE) ? index + SAMPLES_PER_PAGE : _samples.length;
    return _samples.slice(index, endIndex);
  },

  getLatestSample: function() {
    if (_samples.length) {
      return _samples[_samples.length - 1];
    }
  }

});

SampleStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {

    case AppActionTypes.SAMPLE_ADDED:
      _addSamples(action.payload.samples);
      SampleStore.emitChange();
      break;

    case AppActionTypes.ALERT_ACTIVATED:
      _setAlertOnSampleWithId(action.payload.sampleId);
      SampleStore.emitChange();
      break;

    case AppActionTypes.NEXT_PAGED:
      _pageNext();
      SampleStore.emitChange();
      break;

    case AppActionTypes.PREVIOUS_PAGED:
      _pagePrevious();
      SampleStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = SampleStore;
