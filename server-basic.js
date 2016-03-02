var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  console.log('Request to server');
  setTimeout(function() {
    res.send('Q: Why are JS devs so bad at therapy? A: They just don\'t Node how to Express themelves.');
  }, 1000);
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
