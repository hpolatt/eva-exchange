
const getSequelize = require('./getSequelize');
const models = {
  user: require('./user'),
  portfolio: require('./portfolio'),
  share: require('./share'),
  trade: require('./trade')
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const sequelize = getSequelize();

module.exports = { sequelize, ...models };