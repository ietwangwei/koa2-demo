const indexRouter = require('koa-router')()
indexRouter.prefix('/index')

indexRouter.get('/', async (ctx: any, next: any) => {
  await next()
  ctx.body = 'sectionData'
})

module.exports = indexRouter
