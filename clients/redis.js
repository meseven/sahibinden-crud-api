const Redis = require('ioredis');

const redis = new Redis({
  port: 4001,
  host: '3.68.182.155',
  password: '123456Ff',
  db: 0,
});

redis.on('connect', () => console.log('Redis: Connected'));

module.exports = redis;
