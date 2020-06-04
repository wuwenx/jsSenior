const Koa = require("koa");
const app = new Koa();

const anyncIO = () => {
    return new Promise((resolve) => { setTimeout(resolve), 500 });
};

const mid = () => async (ctx, next) => {
    ctx.body = "wuwx";
    await next();
    ctx.body = ctx.body + " css";
};
app.use(mid());
app.use(async (ctx, next) => {
    await anyncIO();
    ctx.body += "  zzj";
    await next();
})


app.listen(3001);