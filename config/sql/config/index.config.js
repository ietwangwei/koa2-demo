const devConfig = require('./config.dev')
const relConfig = require('./config.rel')
const prdConfig = require('./config.prd')

module.exports = {
  dev: devConfig,
  rel: relConfig,
  prd: prdConfig
}
