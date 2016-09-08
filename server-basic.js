var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
  console.log('Request to server on ' + port);
  for (var i = 0; i < 20000000; i++) {
    // Do some unneccessary work so subsequent requests slow down.
  }
  res.send('Q: Why are JS devs so bad at therapy? A: They just don\'t Node how to Express themelves.');
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
