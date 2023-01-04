const mysql = require('mysql')
const dbOption = require('./config')

const pool = mysql.createPool(dbOption)


function querySql (sql, params) {
  return new Promise((resolve, reject) => {
    // set up the connection to the database;
    pool.getConnection((err, conn) => {
      if (err){
        reject(err)
        return
      }

      // invoke the sql instructions;
      conn.query(sql, params, (err, result) => {
        conn.release()
        if (err) {
          reject(err)
          return
        }
        resolve(result)
      })
    })
  })
}
