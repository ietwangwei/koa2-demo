const Koa = require('koa');
const path = require('path');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const static = require('koa-static');
const index = require('./routes/index');
const users = require('./routes/users');
app.use(static(path.resolve(__dirname, './static')));
// error handler
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
console.log(cors());
app.use(cors({
    origin: function () {
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));
app.use(require('koa-static')(__dirname + '/public'));
app.use(views(__dirname + '/views', {
    extension: 'pug'
}));
// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const now = new Date();
    const ms = now - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
app.listen(8085);
module.exports = app;
//# sourceMappingURL=app.js.map