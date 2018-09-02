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

  // socket.setEncoding('utf8');

  // console.log(socket);
  socket.on('data', data => {
    let len = 0;
    let mask = '';
    let tot = '';
    data.forEach((item) => {
      for(let g of (item).toString(2)){
        tot += g;
        if(len > 15 && len < 49){
          mask += g;
        }
        len++;
      }
    });
    console.log(len);
    const step1 = parseInt((data[1]).toString(2).substring(1), 2);
    console.log(step1);

    console.log(tot);
    console.log(mask, mask.length);

  });

  socket.on('end', () => {
    console.log('end');
  });
});

// server.on('socket', x => {
//   console.log(x);
// })

// server.on('connect', (res, socket, head) => {
  // socket.id = counter++;
  // console.log(`Client ${socket.id} connected`);
  //
  // socket.on('data', data => {
  //   // socket.pipe(data);
  // });
  //
  //


  // console.log(res, socket);
  // console.log(head, head.toString());



// });

server.listen(3000, () => {
  console.log('running on port 3000');
})
