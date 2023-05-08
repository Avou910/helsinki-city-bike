const pool = require('../db/pool');

const trips = {
    findAll: () => new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if(err) {
          return reject(err);
        }
  
        connection.query('SELECT departure_station_name, return_station_name, covered_distance_m, duration_sec FROM trips LIMIT 100', (err, result) => {
          connection.release();
          if(err) {
            return reject(err);
          }
          resolve(result);
        });
      });
    }),

}
module.exports = trips;
