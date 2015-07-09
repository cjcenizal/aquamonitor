'use strict';

var Alert = require('../Alert/Alert');
var Readings = require('../Readings/Readings');
var AlertButton = require('../AlertButton/AlertButton');

var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Alert />
        <Readings />
        <AlertButton />
      </div>
    );
  }

});