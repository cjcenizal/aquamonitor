'use strict';

var SamplesTable = require('./SamplesTable');
var SamplesTablePageButton = require('./SamplesTablePageButton');
var SampleActions = require('../../domain/Sample/SampleActions');
var SampleStore = require('../../domain/Sample/SampleStore');

var React = require('react');
var classNames = require('classnames');

var pollToken;

function _getStateFromStores() {
  return {
    hasNextPage: SampleStore.hasNextPage(),
    hasPreviousPage: SampleStore.hasPreviousPage(),
    samples: SampleStore.getSamples()
  };
}

module.exports = React.createClass({

  getInitialState: function() {
    return _getStateFromStores();
  },
  
  onChange: function() {
    this.setState(_getStateFromStores());
  },

  componentDidMount: function() {
    SampleStore.addChangeListener(this.onChange);
    // Poll for new samples.
    pollToken = setInterval(function() {
      SampleActions.fetchSamples();
    }, 1000);
  },

  componentWillUnmount: function() {
    SampleStore.removeChangeListener(this.onChange);
    clearInterval(pollToken);
  },

  render: function() {
    return (
      <div>
        <SamplesTablePageButton
          label="view earlier samples"
          isActive={this.state.hasPreviousPage}
          onClick={this.onClickPreviousPage}
        />
        <SamplesTable
          samples={this.state.samples}
        />
        <SamplesTablePageButton
          label="view later samples"
          isActive={this.state.hasNextPage}
          onClick={this.onClickNextPage}
          isPointedDown={true}
        />
      </div>
    );
  },

  onClickNextPage: function() {
    SampleActions.nextPage();
  },

  onClickPreviousPage: function() {
    SampleActions.previousPage();
  }

});