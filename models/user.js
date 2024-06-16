const { Model, DataTypes } = require("sequelize");
const sequelize = require("./getSequelize");

class User extends Model {
  static associate(models) {
    this.hasMany(models.portfolio); // User has many portfolios
  }
}

User.init({
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize: sequelize(), modelName: 'user' });

module.exports = User;