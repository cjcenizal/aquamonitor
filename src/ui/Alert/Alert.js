'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;
var classNames = require('classnames');

module.exports = React.createClass({

  propTypes: {
    isVisible: ReactPropTypes.bool
  },

  render: function() {
    var classes = classNames('wq-alert', {
      'is-alert-visible': this.props.isVisible
    });
    return (
      <div className={classes}>
        <div className="wq-alert__icon"></div>
        <div className="wq-alert__label">
          Technicians at this location are currently on alert
        </div>
      </div>
    );
  }

});