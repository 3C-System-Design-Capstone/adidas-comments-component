require('newrelic');
//const statsd = require('express-statsd');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const router = require('./routes');
const app = express();
const redis = require('../database/redis/index');

//app.use(statsd());

const StatsD = require('hot-shots');
const dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(morgan('dev'));

app.use(function (req, res, next) {
  redis.get(req.path, function (err, result) {
    if (err) {
      console.log(err);
      next();
    } else {
      if (!result) {
        next();
      } else {
        res.send(result);
      }
    }
  })
})


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
