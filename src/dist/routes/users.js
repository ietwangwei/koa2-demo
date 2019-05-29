const userInfo = require('../../static/data/userInfo.json');
const userRouter = require('koa-router')();
userRouter.prefix('/user');
userRouter.get('/login', function (ctx, next) {
    ctx.body = userInfo;
});
userRouter.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response';
});
module.exports = userRouter;
//# sourceMappingURL=users.js.map