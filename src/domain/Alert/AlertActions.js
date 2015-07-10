'use strict';

var AppDispatcher = require('../AppDispatcher');
var AppActionTypes = require('../AppActionTypes');

module.exports = {

  activateAlert: function(sampleId) {
    AppDispatcher.dispatch({
      type: AppActionTypes.ALERT_ACTIVATED,
      payload: {
        sampleId: sampleId
      }
    });
  },

  deactivateAlert: function() {
    AppDispatcher.dispatch({
      type: AppActionTypes.ALERT_DEACTIVATED
    });
  }

};
