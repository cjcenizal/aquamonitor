'use strict';

var AppDispatcher = require('../AppDispatcher');
var AppActionTypes = require('../AppActionTypes');
var SamplesApi = require('./SamplesApi');

module.exports = {

  fetchSamples: function() {
    SamplesApi.fetch().then(function(response) {
      AppDispatcher.dispatch({
        type: AppActionTypes.SAMPLE_ADDED,
        payload: {
          sample: response.sample
        }
      });
    }, function(error) {
    });
  },

  nextPage: function() {
    AppDispatcher.dispatch({
      type: AppActionTypes.NEXT_PAGED
    });
  },

  previousPage: function() {
    AppDispatcher.dispatch({
      type: AppActionTypes.PREVIOUS_PAGED
    });
  }

};
