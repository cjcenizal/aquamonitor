'use strict';

var ReadingsTable = require('./ReadingsTable');
var ReadingsTablePageButton = require('./ReadingsTablePageButton');

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <ReadingsTablePageButton />
        <ReadingsTable />
        <ReadingsTablePageButton />
      </div>
    );
  }

});