var dgram = require('dgram');
var message = new Buffer.from("深入浅出Node.js");
var client = dgram.createSocket("udp4");

client.on('close', () => {
    console.log('socket已关闭');
});

client.on('error', (err) => {
    console.log(err);
});

console.log(message);
client.send(message, 41234, "localhost");