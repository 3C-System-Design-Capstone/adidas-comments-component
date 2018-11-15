const Sequelize = require('sequelize');
const connection = require('./');

const Comments = connection.define(
  'comment',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user: Sequelize.STRING,
    prodRating: Sequelize.INTEGER,
    yesRating: Sequelize.INTEGER,
    noRating: Sequelize.INTEGER,
    date: Sequelize.DATE,
    body: Sequelize.TEXT,
    verified: Sequelize.BOOLEAN,
    recommend: Sequelize.BOOLEAN,
    size: Sequelize.INTEGER,
    width: Sequelize.INTEGER,
    comfort: Sequelize.INTEGER,
    quality: Sequelize.INTEGER,
    response: Sequelize.TEXT,
    prodId: Sequelize.INTEGER,
    header: Sequelize.TEXT,
  },
  {
    createdAt: false,
    updatedAt: false
  },
);

connection
  .sync()
  .then(() => {
    console.log('MySQL connection synced');
  })
  .catch((err) => {
    console.error('Synced failed: ', err);
  });

module.exports = Comments;
