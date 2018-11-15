const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
  user: { type: String },
  prodRating: { type: Number },
  yesRating: { type: Number },
  noRating: { type: Number },
  date: { type: Date },
  body: { type: String },
  verified: { type: Boolean },
  recommend: { type: Boolean },
  size: { type: Number },
  width: { type: Number },
  comfort: { type: Number },
  quality: { type: Number },
  response: { type: String },
  prodId: { type: Number },
  header: { type: String },
});

const Comments = mongoose.model("Comment", commentsSchema);

module.exports = Comments;
