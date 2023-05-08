const express = require('express');
const router = express.Router();

const { getStations, getStationById } = require ('../controllers/stations');


router.get('/', getStations);
router.get('/:asema_id', getStationById);


module.exports = router;
