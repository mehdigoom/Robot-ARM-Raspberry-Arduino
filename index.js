var usbserial = '/dev/cu.usbmodem1451';
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut Valjang !');
});
server.listen(8080);
console.log("Server Ok");