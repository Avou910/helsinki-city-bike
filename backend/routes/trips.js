const express = require('express');
const router = express.Router();

const { getTrips, getTripCountById } = require ('../controllers/trips');


router.get('/', getTrips);
router.get('/:asema_id', getTripCountById);


module.exports = router;
