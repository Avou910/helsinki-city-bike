const pool = require('../db/pool');

const trips = {
    findAll: () => new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if(err) {
          return reject(err);
        }
        //Limit set to 1000 to prevent performance issues during development, remember to improve performance if time
        connection.query('SELECT departure_station_name, return_station_name, covered_distance_m, duration_sec FROM trips LIMIT 1000', (err, result) => {
          connection.release();
          if(err) {
            return reject(err);
          }
          resolve(result);
        });
      });
    }),

    findDataById: (asema_id) => new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          'SELECT ' +
            '(SELECT AVG(covered_distance_m) FROM trips WHERE departure_station_id = ?) AS avg_starting_distance, ' +
            '(SELECT AVG(covered_distance_m) FROM trips WHERE return_station_id = ?) AS avg_ending_distance, ' +
            'SUM(CASE WHEN return_station_id = ? THEN 1 ELSE 0 END) AS returned_trips_count, ' +
            'SUM(CASE WHEN departure_station_id = ? THEN 1 ELSE 0 END) AS departure_trips_count ' +
          'FROM trips',
          [asema_id, asema_id, asema_id, asema_id],
          (err, result) => {
            connection.release();
            if (err) {
              return reject(err);
            }
            resolve(result);
          }
        );
      });
    }),

    findTopDepartureStations: (asema_id) => new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          'SELECT departure_station_id, departure_station_name, COUNT(*) AS trip_count FROM trips WHERE return_station_id = ? GROUP BY departure_station_id, departure_station_name ORDER BY trip_count DESC LIMIT 5;',
          [asema_id],
          (err, result) => {
            connection.release();
            if (err) {
              return reject(err);
            }
            resolve(result);
          }
        );
      });
    }),

    findTopReturnStations: (asema_id) => new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(
          'SELECT return_station_id, return_station_name, COUNT(*) AS trip_count FROM trips WHERE departure_station_id = ? GROUP BY return_station_id, return_station_name ORDER BY trip_count DESC LIMIT 5;',
          [asema_id],
          (err, result) => {
            connection.release();
            if (err) {
              return reject(err);
            }
            resolve(result);
          }
        );
      });
    }),
    
    
}
module.exports = trips;
