var responseGen = require('./responseGen');
var contextGen = require('./contextGen');

module.exports = {
  robot: {
    responseGet: function (message, messageContext, cb) {
      contextGen(message, messageContext, function(calcContext, messageContext, punctuation) {
        responseGen(calcContext, messageContext, punctuation, function(results) {
          if (!results) {
            cb(null, null);
          } else {
            cb(null, results);
          }
        });
      });
    }
  }
};