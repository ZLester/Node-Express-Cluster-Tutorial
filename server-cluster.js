var cluster = require('cluster');

if (cluster.isMaster) {
  // Use the OS module to check how many core's the current machine has.
  var cpus = require('os').cpus();

  // For each core, create a new worker
  cpus.forEach(function (cpu) {
    cluster.fork();
  });

  // Workers will emit an 'online' event when they spawn
  cluster.on('online', function (worker) {
    console.log('Worker ' + worker.id + ' is here to chew bubblegum and scale node applications.');
  });

  // Workers will emit an 'exit' event when they exit
  cluster.on('exit', function (worker, code, signal) {
    console.log('Worker ' + worker.id + ' died with code ' + code + '. RIP in peace.');
    // You can maintain a constant number of workers by forking when a worker exits
    cluster.fork();
  });
} else {
  var express = require('express');
  var app = express();
  var port = 3000;

  app.get('/', function (req, res) {
    console.log('Request to worker ' + cluster.worker.id);
    for (var i = 0; i < 20000000; i++) {
      // Do some unneccessary work so subsequent requests slow down.
    }
    res.send('Q: Why are JS devs so bad at therapy? A: They just don\'t Node how to Express themelves.');
  });

  app.listen(port, function () {
    console.log('Worker ' + cluster.worker.id + ' is all out of bubblegum on port ' + port);
  });
}
