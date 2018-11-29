require('newrelic');
//const statsd = require('express-statsd');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const router = require('./routes');

const app = express();

//app.use(statsd());

const StatsD = require('hot-shots');
const dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

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
