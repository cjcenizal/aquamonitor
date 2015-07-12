'use strict';

var React = require('react');
var classNames = require('classnames');
var ReactPropTypes = React.PropTypes;

module.exports = React.createClass({

  propTypes: {
    onClick: ReactPropTypes.func,
    label: ReactPropTypes.string,
    isPointedDown: ReactPropTypes.bool
  },

  render: function() {
    var classes = classNames('wq-samples-table-page-button', {
      'wq-samples-table-page-button--pointDown': this.props.isPointedDown,
      'is-samples-table-page-button-disabled': !this.props.isActive
    });
    return (
      <div
        className={classes}
        onClick={this.props.onClick}
      >
        <div className="wq-samples-table-page-button__arrow"></div>
        <div className="wq-samples-table-page-button__label">{this.props.label}</div>
        <div className="wq-samples-table-page-button__arrow"></div>
      </div>
    );
  }

});