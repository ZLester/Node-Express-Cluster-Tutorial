var arguments = process.argv.splice(2);
var express = require('express')
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var app = express();
var port = arguments[0] || 3000;

var addresses = [
  {
    target: 'http://localhost:3001'
  },
  {
    target: 'http://localhost:3002'
  },
  {
    target: 'http://localhost:3003'
  }
];

var i = 0;

app.get('/', function(req, res) {
  proxy.proxyRequest(req, res, addresses[i]);
  i = (i + 1) % addresses.length;
});

app.listen(port, function() {
  console.log('Proxy server listening on ' + port);
});