var express = require('express');
var app = express();
var http = require('http').Server(app);
var async = require('async');
var fs = require('fs');
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');
var db = mongoose.connection;
// Check connection
db.once('open', function () {
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function (err) {
    console.log(err);
});;

app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
var routes =require('./routes/router');
app.use('/',routes);

app.use(express.static('public'));
app.set('view engine', 'ejs');
  
//var routes =require('./routes/router');
//app.use('/',routes);
// catch 404 and forward to error handler
 app.use(function (req, res, next) {
     var err = new Error('File Not Found');
     err.status = 404;
     next(err);
   });

http.listen(3000, function () {
    console.log('listening on *:3000');
});