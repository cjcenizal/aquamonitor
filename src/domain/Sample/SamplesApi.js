var Q = require('q');
var sampleData = require('./sampleData');

var _sampleIndex = 0;
var _startTime = new Date();

var THRESHOLD_SECONDS = 1;

function _getNextSample() {
  // Map 20 minutes in recorded time to a few seconds in real time.
  var currentTime = new Date();
  var secondsElapsed = (currentTime - _startTime) / 1000;
  if (secondsElapsed >= THRESHOLD_SECONDS) {
    // Reset the timer and return the next sample.
    _startTime = new Date();
    return sampleData[_sampleIndex++];
  }
}

var SamplesApi = {

  fetch: function() {
    var deferred = Q.defer();
    var nextSample = _getNextSample();

    if (nextSample) {
      deferred.resolve({
        sample: nextSample
      });
    } else {
      deferred.reject(new Error('No sample available'));
    }

    return deferred.promise;
  }

};

module.exports = SamplesApi;