var events = require("events");
var http = require("http");
var crypto = require("crypto");
var util = require("util");
var opcodes = { TEXT: 1, BINARY: 2, CLOSE: 8, PING: 9, PONG: 10 };
var webSocketConnection = (req, socket, upgradeHead) => {

}
exports.listen = (port, host, connectionHandeler) => {
    var srv = http.createServer((req, res) => {
        hashWebSocketKey

    })
    var
    var hashWebSocketKey = (key) => {
        var sha1 = crypto.createHash("sha1");
        sha1.update(key+)
    }
    srv.on('upgrade', (req, socket, upgradeHead) => {
        var ws = new WebSocket(req, webSocketConnection, upgradeHead);
        connectionHandeler(ws);

    });
    srv.listen(port, host)
};