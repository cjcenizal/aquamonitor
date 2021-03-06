var _ = require('underscore');

var WARNING_THRESHOLD = 0.04;
var ALERT_THRESHOLD = 0.08;
    
function Sample(id, time, activeAlert, readings) {
  this.id = id;
  this.time = new Date(time);
  var hours = this.time.getHours().toString();
  if (hours.length == 1) {
    hours = '0' + hours;
  }
  var minutes = this.time.getMinutes().toString();
  if (minutes.length == 1) {
    minutes = '0' + minutes;
  }
  this.clockTime = [hours, minutes].join(':');
  this.activeAlert = activeAlert;
  this.readings = readings;
  this.total = _.reduce(this.readings, function(memo, value) {
    return memo + value;
  });
  this.state = 'default';
  if (this.total > WARNING_THRESHOLD && this.total <= ALERT_THRESHOLD) {
    this.state = 'warning';
  } else if (this.total > ALERT_THRESHOLD) {
    this.state = 'danger';
  }
}

Sample.prototype.getReadingFor = function(contaminant) {
  return this.readings[contaminant];
}

module.exports = Sample;