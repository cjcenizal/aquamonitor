'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;
var classNames = require('classnames');

module.exports = React.createClass({

  propTypes: {
    isActive: ReactPropTypes.bool
  },

  render: function() {
    var classes = classNames('wq-alert-button', {
      'is-alert-button-disabled': !this.props.isActive
    });
    return (
      <div className="wq-alert-button-container">
        <div className={classes}>
          Alert technicians
        </div>
      </div>
    );
  }

});