const Sequelize = require('sequelize');
const Comments = require('../database/models');

const { Op } = Sequelize;

module.exports = {
  get: (req, res) => {
    const id = req.query.product;
    Comments.findAll({ where: { prodId: id } })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getSort: (req, res) => {
    const { type } = req.params;
    const { limit } = req.params;
    const { filters } = req.query;
    const { id } = req.params;
    let field;
    if (type === 'relevant') {
      field = 'user';
    } else if (type === 'helpfulButton') {
      field = 'yesRating';
    } else if (type === 'newest') {
      field = 'date';
    }

    if (filters !== '[]') {
      console.log(filters);
      Comments.findAll({
        order: [[`${field}`, 'DESC']],
        limit: parseInt(limit, 10),
        where: { prodRating: { [Op.or]: JSON.parse(filters) }, prodId: id },
      })
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      Comments.findAll({
        order: [[`${field}`, 'DESC']],
        limit: parseInt(limit, 10),
        where: { prodId: id },
      })
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  post: (req, res) => {
    // const {
    //   user,
    //   prodRating,
    //   yesRating,
    //   noRating,
    //   date,
    //   body,
    //   verified,
    //   recommend,
    //   size,
    //   width,
    //   comfort,
    //   quality,
    //   response,
    //   header,
    // } = req.data;

    // const prodId = req.params;

    // Comments.create({
    //   user,
    //   prodRating,
    //   yesRating,
    //   noRating,
    //   date,
    //   body,
    //   verified,
    //   recommend,
    //   size,
    //   width,
    //   comfort,
    //   quality,
    //   response,
    //   prodId,
    //   header,
    // }, (err, data) => {
    //   if (err) {
    //     res.send(err);
    //   } else {
    //     res.send(data);
    //   }
    // });
  },
};
