var dgram = require('dgram');
// 创建UDP连接
var server = dgram.createSocket("udp4");
server.on("message", function (msg, rinfo) {
    console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
});
server.on("listening", function () {
    var address = server.address();
     console.log("server listening " +address.address + ":" + address.port);
}); 
server.bind(41234);

