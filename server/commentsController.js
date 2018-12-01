const db = require('../database/');
const redis = require('../database/redis/index');

module.exports = {
  get: (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM comments WHERE id=${id}`)
      .then((result) => {
        redis.set(req.originalUrl, JSON.stringify(result[0][0]));
        res.status(200).send(result[0][0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}