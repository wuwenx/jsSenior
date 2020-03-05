var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer((req, res) => {
    var urlStr = url.parse(req.url);
    var interval;
    if (urlStr.pathname == '/stream') {
        //设置允许跨域的域名，*代表允许任意域名跨域
        res.setHeader("Access-Control-Allow-Origin", "*");
        //允许的header类型
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        //跨域允许的请求方式 
        res.setHeader("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");

        //服务器向浏览器发送的 SSE 数据，必须是 UTF-8 编码的文本，具有如下的 HTTP 头信息。
        res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", "Connection": "keep-alive" })

        // data  数据
        // event event字段表示自定义的事件类型，默认是message事件。浏览器可以用addEventListener()监听该事件。
        // id    数据标识符用id字段表示，相当于每一条数据的编号。
        // retry 服务器可以用retry字段，指定浏览器重新发起连接的时间间隔。

        res.write("retry 100 \n")
        res.write(`data:${new Date()}\n\n`)
        interval = setInterval(() => {
            res.write(`data:${new Date()}\n\n`)
        }, 1000);
        res.connection.addListener('close', () => {
            clearInterval(interval)
        })

    } else if (urlStr.pathname === '/') {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("文件查找失败");
            }
            res.end(data);
        })

    }
}).listen(9898).on('connection', (req, socket, head) => {
    console.log('http://localhost:9898')

})

