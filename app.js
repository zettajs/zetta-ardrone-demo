var HelloApp = module.exports = function() {
  this.name = 'hello';
};

HelloApp.prototype.init = function(elroy) {

  // expose everything to the browser
  elroy.on('deviceready',function(device){
    elroy.expose(device);
  });

};
