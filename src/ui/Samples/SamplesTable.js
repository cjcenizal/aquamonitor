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
      <table className="wq-samples-table">
        <thead>
          <tr>
            <th className="wq-samples-table-header wq-samples-table-header--primary">Time</th>
            <th className="wq-samples-table-header" title="chloroform">CHCl<sub>3</sub></th>
            <th className="wq-samples-table-header" title="bromoform">CHBr<sub>3</sub></th>
            <th className="wq-samples-table-header" title="bromodichloromethane">CHBrCl<sub>2</sub></th>
            <th className="wq-samples-table-header" title="dibromochloromethane">CBr<sub>2</sub>Cl<sub>2</sub></th>
            <th className="wq-samples-table-header"></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

});