const express = require('express');
var bodyParser = require('body-parser');
var Promise = require('promise');
var path = require('path');
const app = express();

// declaring mongoose name of the db --- SocialEventsDB
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/socialEventsDB', function(){
  console.log("DB connection established!!!");
})

const User  = require('./server/models/user.js');
const Event = require('./server/models/event.js');

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Handles Success / Failure , and Returns data
var handler = function (res,next) {
    return function (err, data) {
        if (err) {
            return next(err) ;
        }
        res.send(data);
    }
}

app.get('/events', function(req,res,next){
    Event.find(handler(res,next));
})
app.get('/users', function(req,res,next){
    User.find(handler(res,next));
})
// create the user
app.post('/create_user', function(req, res,next){
  var newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    aboutme: req.body.aboutme,
    location:{
      city: req.body.city,
      street: req.body.street,
      num: req.body.num
    },
    email:  req.body.email ,
    password:  req.body.password 
  })
  console.log(newUser);
  newUser.save(handler(res,next));
  
  
})

// create the event
app.post('/create_event/:id', function(req, res,next){
  var newEvent = new Event({
    title: req.body.title,
    desc: req.body.desc,
    pic: req.body.pic,
    createdby: req.params.id
  })

  newEvent.save(function(err,data){
   User.findOneAndUpdate({_id: data.createdby }, {$push : {myeventsage:data.id}}, handler(res,next))
  });
})


// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});