const Comment = require("../models");

const seed = () => {
  new Comment({
    user: 'hayden',
    prodRating: 2,
    yesRating: 2,
    noRating: 3,
    date: '2018-11-16T00:34:51.798Z',
    body: 'some body text',
    verified: true,
    reccommend: false,
    size: 1,
    width: 2,
    comfort: 3,
    quality: 4,
    response: 'its all good',
    prodId: 3,
    header: 'a header',
  }).save((err, comment) => {
    if (err) {
      console.error(err)
    }
    console.log(`created ${comment}`)
  });
}

seed()
