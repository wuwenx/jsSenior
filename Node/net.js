var net = require('net');
var client = net.connect({ port: 8124 }, function () {
     console.log('client connected');  
      client.write('world!\r\n');
});
client.on('data', function (data) {
    console.log(1213213123213213);
    console.log(data.toString()); client.end();
});
client.on('end', function () { console.log('client disconnected'); });
client.on('error', function (err) {
    console.log(err);
});