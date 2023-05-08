CREATE TABLE IF NOT EXISTS trips (
  departure_date DATETIME NOT NULL,
  return_date DATETIME NOT NULL,
  departure_station_id INT NOT NULL,
  departure_station_name VARCHAR(255) NOT NULL,
  return_station_id INT NOT NULL,
  return_station_name VARCHAR(255) NOT NULL,
  covered_distance_m INT NOT NULL,
  duration_sec INT NOT NULL
);

LOAD DATA INFILE '/var/lib/mysql-files/2021-05-processed.csv'
INTO TABLE trips
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n' 
IGNORE 1 ROWS;

LOAD DATA INFILE '/var/lib/mysql-files/2021-06-processed.csv'
INTO TABLE trips
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n' 
IGNORE 1 ROWS;

LOAD DATA INFILE '/var/lib/mysql-files/2021-07-processed.csv'
INTO TABLE trips
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n' 
IGNORE 1 ROWS;


