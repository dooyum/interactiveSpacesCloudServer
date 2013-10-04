var request = require('request');
request.post({
  url: 'http://interactivespaces.herokuapp.com/incoming',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    direction: "up"
  })
}, function(error, response, body){
  console.log(body);
});