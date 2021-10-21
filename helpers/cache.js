const client = require('../clients/redis');
const cache = require('express-redis-cache')({ client });

module.exports = cache;
