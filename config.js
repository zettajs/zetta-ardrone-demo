var ArdroneScout = require('elroy-ardrone-driver');

module.exports = function(runtime) {
  runtime.scouts.push(ArdroneScout);
};
