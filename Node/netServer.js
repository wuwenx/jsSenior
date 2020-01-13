var net = require('net');
var server = net.createServer(function (socket) {
    // 新的连接
    socket.on('data', function (data) {
        socket.write("123");
    });
    socket.on('end', function () {
        console.log('456');
    });
    socket.write("789：\n");
});
server.listen(8124, function () { console.log('server bound'); });

var net = require('net');
　
var server = net.createServer(function (socket) {  
     socket.write('Echo server\r\n');  
      socket.pipe(socket);
});
　
server.listen(1337, '127.0.0.1');
