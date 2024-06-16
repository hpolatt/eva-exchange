const { Model, DataTypes } = require("sequelize");
const sequelize = require("./getSequelize");
class Portfolio extends Model {
  static associate(models) {
    this.belongsTo(models.user); // Portfolio has a userId
    this.hasMany(models.trade); // Portfolio has many trades
  }
}

Portfolio.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, { sequelize: sequelize(), modelName: 'portfolio' });

module.exports = Portfolio;
