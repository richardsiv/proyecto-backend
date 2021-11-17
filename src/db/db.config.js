const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost/market_laps', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection;