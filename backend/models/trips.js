const pool = require('../db/pool');

const trips = {
    findAll: () => new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if(err) {
          return reject(err);
        }
        //Limit is setted for 1000 to prevent performance issues
        connection.query('SELECT departure_station_name, return_station_name, covered_distance_m, duration_sec FROM trips LIMIT 1000', (err, result) => {
          connection.release();
          if(err) {
            return reject(err);
          }
          resolve(result);
        });
      });
    }),

    findById: (asema_id) => new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if(err) {
          return reject(err);
        }
        connection.query(
        'SELECT SUM(CASE WHEN return_station_id = ? THEN 1 ELSE 0 END) AS returned_trips_count, SUM(CASE WHEN departure_station_id = ? THEN 1 ELSE 0 END) AS departure_trips_count FROM trips',
        [asema_id,asema_id], (err, result) => {
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
