const express = require('express');
const router = express.Router();
const cache = require('../helpers/cache');

/* GET home page. */
router.get('/', cache.route({ expire: 30 }), function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
