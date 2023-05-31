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

        res.json({ data: data, topDepartureStations: topDepartureStations, topReturnStations: topReturnStations });
      
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };


  module.exports = {
    getTrips,
    getDataById,
    
  }