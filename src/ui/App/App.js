'use strict';

var Alert = require('../Alert/Alert');
var Samples = require('../Samples/Samples');
var AlertButton = require('../AlertButton/AlertButton');

var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Alert />
        <Samples />
        <AlertButton />
      </div>
    );
  }

});