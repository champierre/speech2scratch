var WebSocketServer = require('ws').Server;
const PORT = 8080;
var wss = new WebSocketServer({port: PORT});
var connections = [];

console.log("Starting webspeech2scratch 0.0.1");

var webclient = require("request");

wss.on('connection', function(ws) {
  console.log('client connected');
  connections.push(ws);

  ws.on('close', function() {
    connections = connections.filter(function (conn, i) {
      return (conn === ws) ? false : true;
    });
  });
  ws.on('message', function(json) {
    console.log("received " + json);
    data = JSON.parse(json);
    if (data.command == 'speech') {
      if (connections) {
        connections.forEach(function (conn, i) {
          conn.send(JSON.stringify({command: 'speech', speech: data.speech}));
        });
      }
    }
  });
});
