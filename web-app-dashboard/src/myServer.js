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
    console.log(data, data.toString());
    let len = 0;
    let tot = '';
    const frame = {
      fin: null,
      opcode: '',
      mask: null,
      payloadsize: '',
      maskingkey: '',
      payloaddata: '',
      frametype: null,
    };
    console.log();

    let meta = Buffer.from(data.slice(0, 6));
    console.log(meta);

    let finopcode = meta.readUIntBE(0, 1).toString(2);
    console.log(finopcode, finopcode.length);
    console.log();
    console.log();

    frame.fin = finopcode[0];
    frame.opcode = finopcode.slice(4);

    let mskpylodlen = meta.readUIntBE(1, 1).toString(2);
    console.log(mskpylodlen, mskpylodlen.length);
    console.log();
    console.log();
    let maskkey;
    frame.mask = mskpylodlen[0];
    let ppp = parseInt(mskpylodlen.slice(1), 2);

    if (ppp <= 125) {


      frame.payloadsize = ppp;
      maskkey = Buffer.from(meta.slice(2));
    } else if (ppp === 126) {
      let pyldlenstep2 = meta.readUIntBE(2, 2).toString(2);
      console.log('126 length', pyldlenstep2, pyldlenstep2.length);
      let ooo = parseInt(pyldlenstep2, 2);
      console.log(ooo);
      console.log();
      frame.payloadsize = ooo;
      maskkey = Buffer.from(meta.slice(4));
    } else if (ppp === 127) {
      // let pyldlenstep2 = meta.readUIntBE(2, 2).toString(2);
      // console.log('126 length', pyldlenstep2, pyldlenstep2.length);
      // let ooo = parseInt(pyldlenstep2, 2);
      // console.log(ooo);
      // console.log();
      // frame.payloadsize = ooo;



    }





    console.log(maskkey);
    console.log();
    console.log();

    frame.maskingkey = maskkey;

    let ENCODED = data.slice(6);
    console.log('enc', ENCODED);
    let DECODED = Buffer.allocUnsafe(frame.payloadsize).fill(0);
    for(let i = 0; i < ENCODED.length; i++){
      DECODED[i] = ENCODED[i] ^ frame.maskingkey[i % 4];
    }
    console.log(DECODED);
    console.log(DECODED.toString());
    console.log();

    console.log(frame);
    // data.forEach((byte) => {
    //   // console.log(byte, (byte).toString(2).split('').reverse().join(''));
    //   for(let bit of (byte).toString(2).split('').reverse().join('')){
    //     tot += bit;
    //     if(len === 0){
    //       frame.fin = bit;
    //     } else if (len > 3 && len < 8) {
    //       frame.opcode += bit;
    //     } else if (len === 8) {
    //       frame.mask = bit;
    //     } else if (len > 8 && len < 16) {
    //       frame.payloadsize += bit;
    //     } else if (len > 15 && len < 48) {
    //       frame.maskingkey += bit;
    //     } else if (len > 47) {
    //       frame.payloaddata += bit;
    //     }
    //     len++;
    //   }
    // });
    // console.log();
    // console.log(len);
    // console.log(tot);
    // console.log();
    //
    // switch (parseInt(frame.opcode, 2).toString(16).toUpperCase()) {
    //   case '0':
    //     frame.frametype = 'continuation';
    //     break;
    //   case '1':
    //     frame.frametype = 'text';
    //     break;
    //   case '2':
    //     frame.frametype = 'binary';
    //     break;
    //   case '8':
    //     frame.frametype = 'connection close';
    //     break;
    //   case '9':
    //     frame.frametype = 'ping';
    //     break;
    //   case 'A':
    //     frame.frametype = 'pong';
    //     break;
    //   default:
    //     frame.frametype = 'unknown or other';
    // }

    // console.log(frame);
    // console.log();
    // console.log();
    // let msg = [];
    // for(let i = 0; i < frame.payloaddata.length; i += 1){
    //   msg[i] = frame.payloaddata[i] ^ frame.maskingkey[i % 4];
    // }
    // console.log(msg.join(''));
    // console.log();
    // let word = [];
    // let temp = '';
    // msg.forEach((item) => {
    //   temp += item;
    //   if(temp.length === 8){
    //     word.push('0x' + parseInt(temp, 2).toString());
    //     temp = '';
    //   }
    // });
    // console.log(word);
    // console.log(Buffer.from(word));
    // console.log(Buffer.from(word).toString());
    // console.log();
    // console.log('-------------------------------------------');


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
