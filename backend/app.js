const express = require('express');
const cors = require('cors');
const trips = require('./routes/trips');


const app = express();

app.use(express.json());

app.use(cors({
  
}));

app.use('/api/trips', trips);

module.exports = app;
