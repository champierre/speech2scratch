var WebSocketServer = require('ws').Server;
const PORT = 8080;
var wss = new WebSocketServer({port: PORT});
var connections = [];

console.log("Starting webspeech2scratch 0.0.3...");
console.log("");
console.log("Ctrl+C to stop");
console.log("");
console.log("Setup");
console.log("1. Open https://champierre.github.io/speech2scratch/");
console.log("2. Open http://scratchx.org/?url=https://champierre.github.io/speech2scratch/speech2scratch.js");
console.log("");

wss.on('connection', function(ws, req) {
  if (req.url == '/recognition') {
    console.log('Speech recognition client is connected.');
  } else if (req.url == '/scratchx') {
    console.log('ScratchX extension is connected.');
  }
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
