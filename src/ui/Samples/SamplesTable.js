'use strict';

var SamplesTableRow = require('./SamplesTableRow');

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  
  render: function() {
    return (
      <table>
        <thead>
          <tr>
            <th>Row</th>
          </tr>
        </thead>
        <tbody>
          <SamplesTableRow />
        </tbody>
      </table>
    );
  }

});