/*
const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    logging: false,
  },
);

connection
  .authenticate()
  .then(() => {
    console.log('POSTGRES connection has been established successfully');
  })
  .catch((err) => {
    console.error('Unable to connect to database: ', err);
  });

module.exports = connection;
*/
const { Pool } = require('pg')
const pool = new Pool({
  host: process.env.DB_HOSTNAME,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
})

module.exports = pool;