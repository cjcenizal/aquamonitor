'use strict';

var SamplesTable = require('./SamplesTable');
var SamplesTablePageButton = require('./SamplesTablePageButton');

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <SamplesTablePageButton />
        <SamplesTable />
        <SamplesTablePageButton />
      </div>
    );
  }

});