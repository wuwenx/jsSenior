var koa = require('koa');
var app = new koa();
// bodyparser这个必须放在router之前
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
var controller = require('./controller');
// app.use(bodyParser);
app.use(controller());

app.listen(3001);