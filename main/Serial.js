import SerialPort from 'serialport';
import http from 'http';
const parsers = SerialPort.parsers;

let token = '';
let id = '';
let dataName = '';
let device = '';
let x = 1;
let y = 1;
let l = 1;
let a = 1;
let jojo= 333;
const makeRequest = (message) =>
{
  
  if(token !== '')
  {

  
    let captured = message.split("#");
    id = captured[1]
    device = captured[2]
    dataName = captured[3]

    a = Number(captured[5]);
    l = Number(captured[4]);
    x = Number(captured[6]);
    y = Number(captured[7]);
    
    console.log(id);
    console.log(device);
    console.log(dataName);
    console.log(a);
    console.log(l);
    console.log(x);
    console.log(y);
    
  const body = {
    token: token,
    id: id,
    dataName: dataName,
    device: device,
    x: x,
    y: y,
    l : l,
    a : a
  }

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/hello',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
  };
 
  const req = http.request(options, function(res) {
    
    res.setEncoding('utf8');
    res.on('data', function (body) {
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
  // przypisanie danych do ciała
  req.write(JSON.stringify(body));
  req.end();

}
}

const parser = new parsers.Readline({
  delimiter: '\r\n'
});

parser.on('data', makeRequest);

export const startSerial = (serial, newToken) =>{
  token = newToken;
  const port = new SerialPort(serial, {
    baudRate: 9600
  });
  
  port.pipe(parser);
  
  port.on('open', () => console.log('Port open'));
  console.log("serialport set to: ", serial);
  console.log("Token set to: ", token);
}