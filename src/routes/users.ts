const userInfo = require('../../static/data/userInfo.json')
import Parse from '../utils/parse'
const userRouter = require('koa-router')()

userRouter.prefix('/user')

userRouter.post('/login', function (ctx: any, next: any) {
  ctx.body = userInfo
  // Parse.parsePostData(ctx).then(res => {
  //   ctx.body = res
  //   console.log(res)
  // })
})

userRouter.get('/bar', function (ctx: any, next: any) {
  ctx.body = 'this is a users/bar response'
})

module.exports = userRouter
