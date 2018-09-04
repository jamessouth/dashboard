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
  let temp = [];
  // console.log(socket);
  socket.on('data', data => {
    console.log('line 26', data.length); // 65536 bytes max
    if(temp[0] && data.length <= temp[0]){
      data = Buffer.concat([temp[1], data], temp[1].length + data.length);
      temp = [];
    }

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


    let finopcode = data.readUIntBE(0, 1).toString(2);
    console.log('line 42', finopcode, finopcode.length);
    console.log();
    console.log();

    frame.fin = finopcode[0];
    frame.opcode = finopcode.slice(4);

    let mskpylodlen = data.readUIntBE(1, 1).toString(2);
    console.log('line 50', mskpylodlen, mskpylodlen.length);
    console.log();
    console.log();
    let maskkey;
    frame.mask = mskpylodlen[0];
    let ppp = parseInt(mskpylodlen.slice(1), 2);

    let ENCODED;


    if (ppp <= 125) {
      console.log(ppp, 6 + ppp === data.length);
      frame.payloadsize = ppp;
      maskkey = data.slice(2, 6);
      console.log('125', maskkey);
      ENCODED = data.slice(6);

    } else if (ppp === 126) {

      let pyldlenstep2 = data.readUIntBE(2, 2).toString(2);
      console.log('126 length', pyldlenstep2, pyldlenstep2.length);
      let ooo = parseInt(pyldlenstep2, 2);
      console.log(ooo);
      console.log(ppp, 8 + ooo === data.length);


      if(8 + ooo !== data.length){
        temp[0] = ooo;
        temp[1] = Buffer.from(data);
        return;
      }



      console.log();
      frame.payloadsize = ooo;
      maskkey = data.slice(4, 8);
      console.log('126', maskkey);

      ENCODED = data.slice(8);

    } else if (ppp === 127) {
      // aborting further implementation as 65536 is long enough for this


      let pyldlenstep3 = data.readUIntBE(2, 8).toString(2);
      console.log('127 length', pyldlenstep3, pyldlenstep3.length);
      let ooohh = parseInt(pyldlenstep3, 2);
      console.log(ooohh);
      console.log(ppp, 14 + ooohh === data.length);

      if(14 + ooohh !== data.length){
        temp[0] = ooohh;
        temp[1] = Buffer.from(data);
        return;
      }



      console.log();
      frame.payloadsize = ooohh;
      maskkey = data.slice(10, 14);
      console.log('127', maskkey);

      ENCODED = data.slice(14);

    }


    console.log();


    console.log(maskkey);
    console.log();
    console.log();

    frame.maskingkey = maskkey;


    // console.log('enc', ENCODED);
    let DECODED = Buffer.allocUnsafe(frame.payloadsize).fill(0);
    for(let i = 0; i < ENCODED.length; i++){
      DECODED[i] = ENCODED[i] ^ frame.maskingkey[i % 4];
    }
    // console.log(DECODED);
    console.log('line 112', DECODED.toString());
    console.log();

    console.log(frame);
    console.log();
    console.log();
    console.log();
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
