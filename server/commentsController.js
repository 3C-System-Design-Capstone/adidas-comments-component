const pool = require('../database/');
const redis = require('../database/redis/index');

module.exports = {
  get: (req, res) => {
    const { id } = req.params;
    pool.query(`SELECT * FROM comments WHERE id=${id}`, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        redis.set(req.originalUrl, JSON.stringify(res[0]));
        res.status(200).send(response[0]);
      }
    });
  },
};
