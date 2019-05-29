"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo = require('../../static/data/userInfo.json');
const userRouter = require('koa-router')();
userRouter.prefix('/user');
userRouter.post('/login', function (ctx, next) {
    ctx.body = userInfo;
    // Parse.parsePostData(ctx).then(res => {
    //   ctx.body = res
    //   console.log(res)
    // })
});
userRouter.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response';
});
module.exports = userRouter;
//# sourceMappingURL=users.js.map