'use strict';

var AppDispatcher = require('../AppDispatcher');
var AppActionTypes = require('../AppActionTypes');

module.exports = {

  activateAlert: function() {
    AppDispatcher.dispatch({
      type: AppActionTypes.ALERT_ACTIVATED
    });
  },

  deactivateAlert: function() {
    AppDispatcher.dispatch({
      type: AppActionTypes.ALERT_DEACTIVATED
    });
  }

};
