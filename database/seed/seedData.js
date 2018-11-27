const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
  },
);

/* to set-up - hot reloading / mounting the volume dev method */
/* figure out how to add superuser to this user so we can enable copy*/
/* to check - will this work with built docker-container */

connection
  .authenticate()
  .then(() => {
    connection.query(`\copy prods ("id", "name") FROM '${__dirname + "/data/products.csv"}' delimiter as ',' null as ' ' csv header`)
      .then((data) => {
        console.log(data);
      });
  })
  .catch((err) => {
    console.error('Unable to connect to database: ', err);
  });

//COPY prods("id", "name") FROM './postgres/products.csv' delimiter as ',' null as ' ' csv header;
