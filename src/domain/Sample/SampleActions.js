'use strict';

var AppDispatcher = require('../AppDispatcher');
var AppActions = require('../AppActions');
var SamplesApi = require('./SamplesApi');

module.exports = {

  fetchSamples: function() {
    SamplesApi.fetch().then(function(response) {
      AppDispatcher.dispatch({
        type: AppActions.SAMPLE_ADDED,
        payload: {
          sample: response.sample
        }
      });
    }, function(error) {
    });
  },

  nextPage: function() {
    AppDispatcher.dispatch({
      type: AppActions.NEXT_PAGED
    });
  },

  previousPage: function() {
    AppDispatcher.dispatch({
      type: AppActions.PREVIOUS_PAGED
    });
  }

};
