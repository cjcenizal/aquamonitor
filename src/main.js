'use strict';

var React = require('react');

// Define stores so they're available before the UI interacts with them.
// TODO

// Build + render app.
var App = require('./ui/App/App');
React.render(
  <App />,
  document.body
);
