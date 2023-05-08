const express = require('express');
const router = express.Router();

const { getTrips } = require ('../controllers/trips');


router.get('/', getTrips);

module.exports = router;
