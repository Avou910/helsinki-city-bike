const express = require('express');
const router = express.Router();

const { getStations } = require ('../controllers/stations');


router.get('/', getStations);

module.exports = router;
