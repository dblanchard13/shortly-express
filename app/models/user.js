var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      bcrypt.hash(model.get('password'), null, null, function(err, hash){
        model.set('password', hash);
      // TODO: Something with salt...we think.
      });
    });
  }

});

module.exports = User;