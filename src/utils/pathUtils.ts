const path = require('path')

export default {
  resolve (name: string) {
    return path.resolve(__dirname, name)
  },
  join (...names: string[]) {
    return path.join(names)
  }
}
