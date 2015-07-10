'use strict';

var React = require('react');
var classNames = require('classnames');
var ReactPropTypes = React.PropTypes;

module.exports = React.createClass({

  propTypes: {
    sample: ReactPropTypes.object
  },

  render: function() {
    return (
      <tr>
        <td>{this.props.sample.clockTime}</td>
        <td>{this.props.sample.getReadingFor('chloroform')}</td>
        <td>{this.props.sample.getReadingFor('bromoform')}</td>
        <td>{this.props.sample.getReadingFor('bromodichloromethane')}</td>
        <td>{this.props.sample.getReadingFor('dibromochloromethane')}</td>
      </tr>
    );
  }

});