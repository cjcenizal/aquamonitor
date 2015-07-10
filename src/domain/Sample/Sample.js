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
}

Sample.prototype.getReadingFor = function(contaminant) {
  return this.readings[contaminant];
}

module.exports = Sample;