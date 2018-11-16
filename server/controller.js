const Comments = require('../database/models');

const queryParamsHandler = (req, res) => {
  const { id } = req.params;
  const { type, limit, filters } = req.query;
  let field;
  let query;

  if (type === 'relevant') {
    field = 'user';
  } else if (type === 'helpfulButton') {
    field = 'yesRating';
  } else if (type === 'newest') {
    field = 'date';
  }


  if (filters !== '[]') {

    const orQuery = JSON.parse(filters).map((elt) => {
      return { 'prodRating': elt }
    })

    query = { prodId: id, $or: orQuery };

  } else {
    query = { prodId: id }
  }

  Comments.find(query).sort({ [field]: -1 }).limit(parseInt(limit))
    .exec((err, posts) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(posts);
      }
    });
}

module.exports = {

  get: (req, res) => {

    if (Object.keys(req.query).length > 0) {
      queryParamsHandler(req, res);
    } else {
      const { id } = req.params;
      Comments.find({ prodId: id }, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(data);
        }
      })
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