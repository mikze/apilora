import readline from 'readline'
import * as Serial from './Serial.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

let token = '';
let serial = '';
console.log("Prosze podac serial >");



function getSerial() {
    return new Promise((resolve) => {
      rl.question('Podaj serial ', (serial) => { resolve(serial) })
    })
  }

  function getToken(serial) {
    return new Promise((resolve) => {
      rl.question('Podaj Token ', (token) => { resolve([serial, token]) })
    })
  }

function startSeria([_serial,_token])
{
            Serial.startSerial(_serial,_token)
}

getSerial().then(getToken).then(startSeria);