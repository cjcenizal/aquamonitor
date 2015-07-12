'use strict';

var React = require('react');

// Build + render app.
var App = require('./ui/App/App');
React.render(
  <App />,
  document.getElementById('waterQualityApp')
);
