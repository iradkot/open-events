var mongoose = require('mongoose');

//schema of the individual user 
var eventSchema = new mongoose.Schema({
  title: String,
  desc: String,
  pic: String,
  createdby: mongoose.Schema.Types.Mixed
});

var Event = mongoose.model('event', eventSchema)

module.exports = Event;