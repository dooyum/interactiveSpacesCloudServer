var request = require('request');
var url = app.get('port') == '3000' ? 'http://localhost:3000/outgoing' : 'http://interactivespaces.herokuapp.com/outgoing';

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