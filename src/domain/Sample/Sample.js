function Sample(id, time, activeAlert, readings) {
  this.id = id;
  this.time = new Date(time);
  this.activeAlert = activeAlert;
  this.readings = readings;
}

module.exports = Sample;