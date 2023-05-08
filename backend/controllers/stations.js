const stations = require('../models/stations');

const getStations = async (req, res) => {
    try {
      const response = await stations.findAll();
      console.log("chekc",stations)
      if(response) {
        res.send(response);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

  module.exports = {
    getStations
  }