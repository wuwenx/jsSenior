var ws = require('nodejs-websocket')
console.log("开始建立连接...")
ws.createServer((conn) => {
    // 接收客户端发送的消息
    conn.on('text', (str) => {
        if(str==="wwx"){
            conn.sendText("success");
        }

    })
    conn.on('close', (str) => {
        console.log("连接关闭");

    })

    conn.on('error', (str) => {
        console.log("异常关闭");
    })



}).listen(8001)
console.log("WebSocket建立完毕")