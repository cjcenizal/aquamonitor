'use strict';

var React = require('react');

// Define stores so they're available before the UI interacts with them.
var SampleStore = require('./domain/Sample/SampleStore');
var AlertStore = require('./domain/Alert/AlertStore');

// Build + render app.
var App = require('./ui/App/App');
React.render(
  <App />,
  document.getElementById('waterQualityApp')
);
