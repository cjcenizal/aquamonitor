'use strict';

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="wq-alert">
        <div className="wq-alert__icon"></div>
        <div className="wq-alert__label">
          Technicians at this location are currently on alert
        </div>
      </div>
    );
  }

});