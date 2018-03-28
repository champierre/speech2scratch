var WebSocketServer = require('ws').Server;
const PORT = 8080;
var wss = new WebSocketServer({port: PORT});
var connections = [];
var exec = require('child_process').exec;

console.log("Starting webspeech2scratch 0.0.2");

exec('open https://champierre.github.io/speech2scratch/', function(err, stdout, stderr){
  console.log("Opened https://champierre.github.io/speech2scratch/");
});

exec('open http://scratchx.org/?url=https://champierre.github.io/speech2scratch/speech2scratch.js', function(err, stdout, stderr){
  console.log("Opened http://scratchx.org/?url=https://champierre.github.io/speech2scratch/speech2scratch.js");
});

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
