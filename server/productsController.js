const pool = require('../database/');
const redis = require('../database/redis/index');

module.exports = {
  get: (req, res) => {
    const { id } = req.params;
    pool.query(`SELECT * FROM prods WHERE id=${id}`, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result)
        redis.set(req.originalUrl, JSON.stringify(result[0]));
        res.status(200).send(result.rows[0]);
      }
    });
  },
}