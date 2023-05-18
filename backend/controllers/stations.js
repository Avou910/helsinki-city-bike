const stations = require('../models/stations');

const getStations = async (req, res) => {
    try {
      const response = await stations.findAll();
      if(response) {
        res.send(response);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

  const getStationById = async (req, res) => {
    try {
        const asema_id = parseInt(req.params.asema_id);
        const response = await stations.findById(asema_id);
      if(response) {
        res.send(response);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

  module.exports = {
    getStations,
    getStationById
  }