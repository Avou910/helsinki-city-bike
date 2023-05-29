const express = require('express');
const router = express.Router();

const { getTrips, getDataById} = require ('../controllers/trips');


router.get('/', getTrips);
router.get('/:asema_id', getDataById);




module.exports = router;
