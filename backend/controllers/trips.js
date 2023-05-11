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

  const getTripCountById = async (req, res) => {
    try {
        const asema_id = parseInt(req.params.asema_id);
        const response = await trips.findById(asema_id);
        console.log("waht we get",response)
      if(response) {
        res.send(response);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  };

  module.exports = {
    getTrips,
    getTripCountById
  }