const express = require('express');
const router = express.Router();

const cache = require('../../helpers/cache');
const limiter = require('../../helpers/rate-limiter');

const schema = require('./validations');
const Book = require('../../models/Book');

router.get('/', cache.route({ expire: 60 * 60 }), async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', cache.route({ expire: 60 }), async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    res.json(book);
  } catch (e) {
    next(e);
  }
});

router.post('/', limiter, async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);

    const book = new Book(req.body);
    const savedData = await book.save();

    res.json(savedData);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    await schema.validateAsync(req.body);

    const updateBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBook);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    res.json(book);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
