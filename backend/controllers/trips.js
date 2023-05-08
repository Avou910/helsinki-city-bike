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

  module.exports = {
    getTrips
  }