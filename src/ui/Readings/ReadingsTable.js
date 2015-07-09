'use strict';

var ReadingsTableRow = require('./ReadingsTableRow');

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
          <ReadingsTableRow />
        </tbody>
      </table>
    );
  }

});