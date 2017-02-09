/**
 * Created by thibault on 27/01/17.
 */

var express = require('express');
var app = express();

var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

// list serial ports:
serialport.list(function (err, ports) {
   /* ports.forEach(function(port) {
        console.log(port.comName);
    });*/
    SerialPort = serialport.SerialPort;
   console.log(ports[0].comName);
});

var serialport2 = new SerialPort("/dev/ttyACM0");

serialport2.on('open', function(){
    console.log('Serial Port Opend');
    serialport2.on('data', function(data){
       // console.log(data.length);
       // console.log(data[0]);

        console.log(data[0]);
        serialport2.write(1);
    });

      // serialport2.write("SDGSGGDGDDDHDHFG");
});

/*serialport2.on('open', function(){
    serialport2.write(1);
});*/


app.get('/', function (req, res) {
    res.send('Hello World!');
});

/*app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
*/
