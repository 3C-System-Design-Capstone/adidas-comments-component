require('newrelic');
//const statsd = require('express-statsd');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const router = require('./routes');
const Redis = require('ioredis');

const app = express();

// connect to Redis
const REDIS_URL = process.env.REDIS_URL;
const redis = new Redis(6379, REDIS_URL);

redis.set('foo', 'bar');
redis.get('hi', function (err, result) {
  console.log(result);
});

//app.use(statsd());

const StatsD = require('hot-shots');
const dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(morgan('dev'));

/* Stop serving up static assets. nginx should serve these
app.use(express.static(path.join(__dirname, '/../client/dist')));
*/

/* middleware to allow compression of the bundle */
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/api', router);

module.exports = app;
