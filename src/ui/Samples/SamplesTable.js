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
            <th>Time</th>
            <th title="chloroform">CHCl<sub>3</sub></th>
            <th title="bromoform">CHBr<sub>3</sub></th>
            <th title="bromodichloromethane">CHBrCl<sub>2</sub></th>
            <th title="dibromochloromethane">CBr<sub>2</sub>Cl<sub>2</sub></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

});