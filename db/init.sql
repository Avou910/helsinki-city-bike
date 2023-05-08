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

CREATE TABLE IF NOT EXISTS stations (
  fid INT NOT NULL,
  asema_id INT NOT NULL,
  nimi_fin VARCHAR(255) NOT NULL,
  namn_swe VARCHAR(255) NOT NULL,
  name_eng VARCHAR(255) NOT NULL,
  osoite VARCHAR(255) NOT NULL,
  adress VARCHAR(255) NOT NULL,
  kaupunki VARCHAR(255) NOT NULL,
  stad VARCHAR(255) NOT NULL,
  operaattor VARCHAR(255) NOT NULL,
  kapasiteet INT NOT NULL,
  x_coordinate DECIMAL(10,6) NOT NULL,
  y_coordinate DECIMAL(10,6) NOT NULL
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

LOAD DATA INFILE '/var/lib/mysql-files/Helsingin_ja_Espoon_kaupunkipyöräasemat_avoin_processed.csv'
INTO TABLE stations
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n' 
IGNORE 1 ROWS;


