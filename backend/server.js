const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/home_market', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  // Define user schema
});

const propertySchema = new mongoose.Schema({
  // Define property schema
});

const User = mongoose.model('User', userSchema);
const Property = mongoose.model('Property', propertySchema);

// Define routes for authentication, property CRUD operations

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
