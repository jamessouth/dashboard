const http = require('http');
const crypto = require('crypto');

const hash = crypto.createHash('sha1');
const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
let counter = 0;
let sockets = {};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});

server.on('upgrade', (req, socket, head) => {
  const key = req.headers['sec-websocket-key'];
  const result = key.trim() + GUID;
  hash.update(result);
  const encode = hash.digest('base64');
  socket.write(`HTTP/1.1 101 Web Socket Protocol Handshake\r\nUpgrade: WebSocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${encode}\r\n\r\n`);
  socket.pipe(socket);
});

server.on('connection', socket => {
  socket.id = counter++;
  console.log(`Client ${socket.id} connected`);

  socket.on('data', data => {
    console.log(data.toString());
  });
  // socket.setEncoding('utf8');

});

server.listen(3000, () => {
  console.log('running on port 3000');
})
