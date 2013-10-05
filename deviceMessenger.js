var request = require('request');
var express = require('express');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
var url = app.get('port') == 3000 ? 'http://localhost:3000/toCloud' : 'http://interactivespaces.herokuapp.com/toCloud';
request.post({
  url: url,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    direction: "up"
  })
}, function(error, response, body){
  console.log(body);
});