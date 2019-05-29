const config = require('./config')
const evn = process.evn

const myConfig = config[evn]

module.exports = myConfig
