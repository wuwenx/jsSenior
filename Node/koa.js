const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const bodyParser = require('koa-bodyparser');


// const anyncIO = () => {
//     return new Promise((resolve) => { setTimeout(resolve), 500 });
// };

// const mid = () => async (ctx, next) => {
//     ctx.body = "wuwx";
//     await next();
//     ctx.body = ctx.body + " css";
// };
// app.use(mid());
// app.use(async (ctx, next) => {
//     await anyncIO();
//     ctx.body += "  zzj";
//     await next();
// })

// app.use(async (ctx, next) => {
//     console.log(1)
//     await next();
//     console.log(2)
//     const rt = ctx.response.get('X-Rrsponse-Time');
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// })
// app.use(async (ctx, next) => {
//     console.log(3)
//     const start = Date.now();
//     await next();
//     console.log(4)
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);

// })
// app.use(async ctx=>{
//     console.log(5)
//     ctx.body="Hello World"
// })
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//         ctx.response.body = 'index page';
//     } else {
//         await next();
//     }
// });

// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/test') {
//         ctx.response.body = 'TEST page';
//     } else {
//         await next();
//     }
// });

// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/error') {
//         ctx.response.body = 'ERROR page';
//     } else {
//         await next();
//     }
// });
app.use(bodyParser());
app.use(async (ctx, next) => {
    console.log(`Process${ctx.request.method} ${ctx.request.url}`);
    await next();
})
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello ${name}</h1>`

})
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
});
router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});
app.use(router.routes());

app.listen(3001);