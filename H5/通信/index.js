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
        res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", "Connection": "keep-alive" })

        res.write("retry 100 \n")
        res.write(`date${new Date()}\n\n`)
        interval = setInterval(() => {
            res.write(`date${new Date()}\n\n`)
        }, 1000);
        res.connection.addListener('close', () => {
            clearInterval(interval)
        })

    }
}).listen(9898).on('connection', (req, socket, head) => {
    console.log('http://localhost:9898')

})

