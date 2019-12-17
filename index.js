const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => console.log('Connected to DB!')
);

app.use('/api/v1', userRoute);

app.listen(process.env.PORT, () => console.log(`This app is running on port! ${process.env.PORT}`));