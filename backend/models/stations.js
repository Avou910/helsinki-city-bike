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

}
module.exports = stations;
