'use strict';

var SamplesTableRow = require('./SamplesTableRow');

var React = require('react');
var classNames = require('classnames');
var ReactPropTypes = React.PropTypes;

module.exports = React.createClass({
  
  propTypes: {
    samples: ReactPropTypes.array
  },

  render: function() {
    var rows = this.props.samples.map(function(sample) {
      return (
        <SamplesTableRow
          sample={sample}
          key={sample.id}
        />
      )
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Head</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

});