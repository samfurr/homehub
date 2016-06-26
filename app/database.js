'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/homehub', function(err){
  if(err){
    console.log('Failed to connect to database.');
  }else{
    console.log('database connected!');
  }
});
