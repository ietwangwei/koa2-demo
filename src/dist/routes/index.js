const indexRouter = require('koa-router')();
indexRouter.prefix('/index');
indexRouter.get('/', async (ctx, next) => {
    await next();
    ctx.body = 'sectionData';
});
module.exports = indexRouter;
//# sourceMappingURL=index.js.map