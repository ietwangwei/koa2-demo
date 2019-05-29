const mysql = require('mysql')
const address = require('../../config/sql/index')

const pool = mysql.createPool(address)

const query = (sql: any, val: any) => {
  return new Promise((resolve: any, reject: any) => {
    pool.getConnection((err: any, connection: any) => {
      if (err) return reject(err)
      connection.query(sql, val, (error: any, res: any) => {
        if (err) return reject(error)
        resolve(res)
        connection.release()
      })
    })
  })
}

module.exports = query
