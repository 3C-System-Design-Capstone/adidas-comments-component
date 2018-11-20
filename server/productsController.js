const db = require('../database/');

module.exports = {
  get: (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM prods WHERE id=${id}`)
      .then((result) => {
        // TODO here I am parsing the sequelize entity, which is very silly
        // I should just return raw sql to the server
        console.log(result[0][0])
        res.status(200).send(result[0][0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}