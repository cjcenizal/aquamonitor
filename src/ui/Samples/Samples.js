'use strict';

var SamplesTable = require('./SamplesTable');
var SamplesTablePageButton = require('./SamplesTablePageButton');
var SampleActions = require('../../domain/Sample/SampleActions');

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  componentDidMount: function() {
    // Poll for new samples.
    setInterval(function() {
      SampleActions.fetchSamples();
    }, 1000);
  },

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