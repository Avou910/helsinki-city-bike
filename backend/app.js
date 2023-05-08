const express = require('express');
const cors = require('cors');
const trips = require('./routes/trips');
const stations = require('./routes/stations');



const app = express();

app.use(express.json());

app.use(cors({

}));

app.use('/api/trips', trips);
app.use('/api/stations', stations);


module.exports = app;
