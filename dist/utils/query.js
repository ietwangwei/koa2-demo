const mysql = require('mysql');
const address = require('../../config/sql/index');
const pool = mysql.createPool(address);
const query = (sql, val) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                return reject(err);
            connection.query(sql, val, (error, res) => {
                if (err)
                    return reject(error);
                resolve(res);
                connection.release();
            });
        });
    });
};
module.exports = query;
//# sourceMappingURL=query.js.map