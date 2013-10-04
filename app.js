
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/incoming', function(req, res) {
  console.log(req.body);
  console.log("Message Received");
  res.send("ok");

  //pass message on to interective spaces
  var request = require('request');
  var interactiveSpacesUrl = 'http://interactivespaces.herokuapp.com/outgoing';
  request.post({
    url: interactiveSpacesUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: req.body
    })
  }, function(error, response, body){
    console.log("Message has been sent");
  });
});

//Dummy method to test if message is passed on
//TODO(dooyum) delete this method when IS is set up
app.post('/outgoing', function(req, res) {
  console.log("Message Passed On");
  console.log(req.body);
  res.send("ok");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
