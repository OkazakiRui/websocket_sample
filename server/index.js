const server = require('ws').Server;

console.log(server);
const s = new server({ port: 8000 });
s.on('connection', (ws) => {
  console.log('connect');
  ws.on('message', (message) => {
    let decode = new Uint8Array(message);
    let msg = new TextDecoder().decode(decode);
    console.log(msg);

    // console.log(s);
    s.clients.forEach((client) => {
      client.send(msg);
    });
  });
});
