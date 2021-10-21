const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '`{PATH}` alanı zorunludur'],
    minlength: [4, '`{PATH}` en az ({MINLENGTH}) karakter olmalıdır.'],
    maxlength: [50, '`{PATH}` en fazla ({MAXLENGTH}) karakter olmalıdır.'],
  },
  description: String,
  year: {
    type: Number,
    max: 2022,
    min: 1500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('book', BookSchema);
