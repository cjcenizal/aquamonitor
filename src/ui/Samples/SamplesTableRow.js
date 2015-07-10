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
        <td>{this.props.sample.id}</td>
      </tr>
    );
  }

});