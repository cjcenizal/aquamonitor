'use strict';

var React = require('react');
var classNames = require('classnames');
var ReactPropTypes = React.PropTypes;

module.exports = React.createClass({

  propTypes: {
    onClick: ReactPropTypes.func,
    label: ReactPropTypes.string
  },

  render: function() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }

});