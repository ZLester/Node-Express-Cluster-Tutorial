var cluster = require('cluster');
var args = process.argv.splice(2);

if (cluster.isMaster) {
  var cpus = require('os').cpus();
  cpus.forEach(function(cpu) {
    cluster.fork();
  });
  console.log(cpus);

  cluster.on('online', function(worker) {
    console.log('Worker ' + worker.id + ' is here to chew bubblegum and scale node applications.');
  });

  cluster.on('exit', function(worker, code, signal) {
    console.log('Worker ' + worker.id + ' died. RIP in peace.');
    cluster.fork();
  });
} else {
  var express = require('express');
  var app = express();
  var port = args[0] || 3000;

  app.get('/', function(req, res) {
    console.log('Request to worker ' + cluster.worker.id); 
    for (var i = 0; i < 20000000; i++) {
      // do some unneccessary work
    }
    res.send('Q: Why are JS devs so bad at therapy? A: They just don\'t Node how to Express themelves.');
  });

  app.listen(port, function() {
    console.log('Worker ' + cluster.worker.id + ' is all out of bubblegum on port ' + port);
  });
}