# Sensor

Small library that generates random messages on an MQTT brocker. 

## Messages topics and payload

`"value/[name]"` with "[name]" the name of the sensor and a payload with format : 

```JSON
{
  "name": "[name]",
  "data: "[data]"
}
```

where "[name]" is the string value of the Port Name and "[data]" the integer value transmitted by the Arduino.

## run it


Run a default example with:

```
npm install
node brokerServ.js
```

## run it with Docker

[Docker](https://www.docker.com/what-docker) is a powerful tool which lets you launch applications without configuring
anything, whatever your system configuration is, whatever your distro is. You can find installation instructions
[here](https://www.docker.com/products/docker). You will also need
[docker-compose](https://docs.docker.com/compose/install/) installed on your machine.

### launch and use it

To launch the generator, place yourself in the project directory and launch :

```
docker-compose up -d
```

And it's done. You can now connect your MQTT client to `127.0.0.1:1883` via the MQTT port, and to `127.0.0.1:8080`
via the WebSocket port.