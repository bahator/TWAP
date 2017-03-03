var express = require('express');
var app = express();
var mongoose = require('mongoose');
var TMClient = require('textmagic-rest-client');
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

//DB setup
mongoose.connect('mongodb://gifted_saha');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('connected', function() {
  var Donnee = require('./models/donnee');
  console.log('connected to DB');
});




/*var serialport2 = new SerialPort("/dev/ttyACM0");

serialport2.on('open', function(){
	console.log('Serial Port Opend');
	serialport2.on('data', function(data){
		//console.log(data[0]);
		// serialport2.write('a');
		var ObjectID = require('mongodb').ObjectID;

	        var don = Donnee({
			donneeId: ObjectID,
			date: Date.now(),
			port: "/dev/ttyACM0",
			value: data[0]
	      	});
		don.save(function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("user Created");
			}
		});
	});
});*/

app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

app.get('/data', function(req, res){
  	Donnee.find(function (err, donnees) {
		return res.end(JSON.stringify(donnees));
	});
});

app.post('/sendbuzz', function(req, res){
	/*var serialport3 = new SerialPort("/dev/ttyACM0");
	serialport2.on('open', function(){
		  serialport3.write('a');	
	}*/
});

app.post('/sendSms', function(req, res) {
	var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
	c.Messages.send({text: 'Porte ouverte!!!', phones:req.numero}, function(err, res){
	    console.log('Messages.send()', err, res);
	});
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
