const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://root:123456Ff@3.68.182.155:27017');

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
  });

  mongoose.connection.on('error', (e) => {
    console.log('MongoDB Connection Error', e);
  });
};
