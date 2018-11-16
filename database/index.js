require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connect(`mongodb://localhost:27017/shoedidas_comments`);

db
  .then(() => console.log('Connected to mongo'))
  .catch(err => {
    console.log('There was a problem connecting to db')
    console.log(err);
  })

module.exports = db;
