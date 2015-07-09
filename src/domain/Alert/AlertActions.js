'use strict';

var AppDispatcher = require('../AppDispatcher');
var AppActions = require('../AppActions');

module.exports = {

  activateAlert: function() {
    AppDispatcher.dispatch({
      type: AppActions.ALERT_ACTIVATED,
      payload: {
        sample: response.sample
      }
    });
  },

  deactivateAlert: function() {
    AppDispatcher.dispatch({
      type: AppActions.ALERT_DEACTIVATED
    });
  }

};
