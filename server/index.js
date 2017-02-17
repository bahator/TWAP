var mqtt = require('mqtt')

const RandomMQTTSensor = function (name, data, broker) {
  this.name = typeof id === 'undefined' ? "" : name;
  this.data = typeof data === 'undefined' ? 3 : data;
  this.broker = typeof broker === 'undefined' ? 'mqtt://mosca' : broker;
  this.handler = () => {}
}
RandomMQTTSensor.prototype.handler = function (topic, message) {
  // message is Buffer
  console.log(message.toString())

}

RandomMQTTSensor.prototype.start = function() {
  this.client = mqtt.connect(this.broker);
  this.client.on('connect', () => {
    this.client.subscribe('action/'+this.name)
    const s = `{"name":"${this.name}", "data":"${this.data.toString()}"}`
    this.client.publish('value/'+this.name, s)
  })
  this.client.on('message', RandomMQTTSensor.prototype.handler.bind(this));

}
RandomMQTTSensor.prototype.stop =  function () {
  clearTimeout(this.timeout);
  this.client.unsuscribe('action/'+this.name);
  this.client.end();
}
exports.RandomMQTTSensor = RandomMQTTSensor;
exports.SensorType = SensorType;
exports.Value = Value;
