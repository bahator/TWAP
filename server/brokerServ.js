var sensor = require('.');
var serialport = require('serialport');

var SerialPort = new SerialPort("/dev/ttyACM0");
const broker = 'mqtt://mosca'

serialport2.on('open', function(){
  serialport2.on('data', function(data){
    //nm du port, donnée, broker
    s=new sensor("ttyACM0", data[0], broker);
    s.start();
  });
});
