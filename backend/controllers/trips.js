const trips = require('../models/trips');

const getTrips = async (req, res) => {
    try {
      const response = await trips.findAll();
      if(response) {
        res.send(response);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

  const getDataById = async (req, res) => {
    try {
        const asema_id = parseInt(req.params.asema_id);
        const data = await trips.findDataById(asema_id);
        const topDepartureStations = await trips.findTopDepartureStations(asema_id);
        const topReturnStations = await trips.findTopReturnStations(asema_id);


        // This is done so we access the asema_id directly at the frontend TOP 5 tables
        const newTopDepartureStations = topDepartureStations.map(station => {
          return {
            asema_id: station.departure_station_id,
            departure_station_name: station.departure_station_name,
            trip_count: station.trip_count
          };
        });

        const newTopReturnStations = topReturnStations.map(station => {
          return {
            asema_id: station.return_station_id,
            return_station_name: station.return_station_name,
            trip_count: station.trip_count
          };
        });


        res.json({ data: data, topDepartureStations: newTopDepartureStations, topReturnStations: newTopReturnStations });
      
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };


  module.exports = {
    getTrips,
    getDataById,
    
  }