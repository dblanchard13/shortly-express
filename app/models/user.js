var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      console.log('MODEL ', model);
      console.log('ATTRS ', attrs);
      console.log('OPTIONS ', options);
      bcrypt.hash(model.get('password'), null, null, function(err, hash){
        // model.fetch().then(function(found){
        //   console.log('model before - ', found);
        // });
        model.set('password', hash);
        model.save();
        // model.fetch().then(function(found){
        //   console.log('model after - ', found);
        // });
      // TODO: Something with salt...we think.
      });
    });
  }

});

module.exports = User;