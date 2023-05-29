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
        const topStations = await trips.findTopStationsById(asema_id);

        console.log("stats:", data);
        console.log("Top Stations:", topStations);
        res.json({ data: data, topStations: topStations });
      
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };


  module.exports = {
    getTrips,
    getDataById,
    
  }