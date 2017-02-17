/**
 * Created by thibault on 27/01/17.
 */

var express = require('express');
var app = express();

var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var serialport2 = new SerialPort("/dev/ttyACM0");

serialport2.on('open', function(){
    console.log('Serial Port Opend');
    serialport2.on('data', function(data){
        console.log(data[0]);
        serialport2.write('a');
    });
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

/*app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
*/
