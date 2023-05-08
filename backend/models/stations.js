const pool = require('../db/pool');

const stations = {
    findAll: () => new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if(err) {
          return reject(err);
        }
        connection.query('SELECT * FROM stations LIMIT 100', (err, result) => {
          connection.release();
          if(err) {
            return reject(err);
          }
          resolve(result);
        });
      });
    }),

    findById: (asema_id) => new Promise((resolve, reject) => {
        console.log("asema_id on",asema_id)
        pool.getConnection((err, connection) => {
          if(err) {
            return reject(err);
          }
          connection.query('SELECT * FROM stations WHERE asema_id = ?',asema_id, (err, result) => {
            connection.release();
            if(err) {
              return reject(err);
            }
            resolve(result);
          });
        });
      }),
  

}
module.exports = stations;
