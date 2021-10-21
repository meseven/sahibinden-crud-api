const RateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const client = require('../clients/redis');

const limiter = new RateLimit({
  store: new RedisStore({
    client,
    prefix: 'rate_limit',
    expiry: 30,
  }),
  max: 5, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
});

module.exports = limiter;
