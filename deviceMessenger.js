var request = require('request');
//http://localhost:3000/toCloud for local testing
var url = 'http://interactivespaces.herokuapp.com/toCloud';
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