require('dotenv').config();
const Redis = require('ioredis');
const REDIS_URL = process.env.REDIS_URL;
const redis = new Redis(6379, REDIS_URL);

module.exports = redis;
