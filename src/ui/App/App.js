'use strict';

var Alert = require('../Alert/Alert');
var Samples = require('../Samples/Samples');
var AlertButton = require('../AlertButton/AlertButton');
var AlertStore = require('../../domain/Alert/AlertStore');
var SampleStore = require('../../domain/Sample/SampleStore');
var SampleActions = require('../../domain/Sample/SampleActions');

var React = require('react');

var pollToken;

function _getStateFromStores() {
  return {
    hasNextPage: SampleStore.hasNextPage(),
    hasPreviousPage: SampleStore.hasPreviousPage(),
    samples: SampleStore.getSamples(),
    isAlertable: AlertStore.isAlertable()
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
    // Get first batch of samples immediately.
    SampleActions.fetchSamples();
  },

  componentWillUnmount: function() {
    SampleStore.removeChangeListener(this.onChange);
    clearInterval(pollToken);
  },

  render: function() {
    return (
      <div>
        <Alert />
        <Samples
          samples={this.state.samples}
          hasNextPage={this.state.hasNextPage}
          hasPreviousPage={this.state.hasPreviousPage}
        />
        <AlertButton
          isActive={this.state.isAlertable}
        />
      </div>
    );
  }

});