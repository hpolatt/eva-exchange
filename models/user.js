const { Model } = require("sequelize");

class User extends Model {
  constructor(sequelize, DataTypes) {
    return sequelize.define('user', {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
  }

  associate(models) {
    this.hasMany(models.portfolio,  { as: 'portfolios', foreignKey: 'userId'});
  }
}

module.exports = User;
