const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    "host": process.env.DB_HOST,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "dialect": "postgres"
});

const User = require('./user');
const Portfolio = require('./portfolio');
const Share = require('./share');
const Trade = require('./trade');

const models = {
  user: new User(sequelize, DataTypes),
  portfolio: new Portfolio(sequelize, DataTypes),
  share: new Share(sequelize, DataTypes),
  trade: new Trade(sequelize, DataTypes),
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

module.exports = { sequelize, ...models };