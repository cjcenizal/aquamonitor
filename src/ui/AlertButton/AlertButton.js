'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;
var classNames = require('classnames');

module.exports = React.createClass({

  propTypes: {
    isActive: ReactPropTypes.bool,
    onClick: ReactPropTypes.func
  },

  render: function() {
    var classes = classNames('wq-alert-button', {
      'is-alert-button-disabled': !this.props.isActive
    });
    return (
      <div className="wq-alert-button-container">
        <div 
          className={classes}
          onClick={this.props.onClick}
        >
          Alert technicians
        </div>
      </div>
    );
  }

});