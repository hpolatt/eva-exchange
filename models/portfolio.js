const { Model } = require("sequelize");

class Portfolio extends Model {
  constructor(sequelize, DataTypes) {
    return sequelize.define('portfolio', {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    });
  }

  static associate(models) {
    this.belongsTo(models.user); // Portfolio has a userId
    this.belongsTo(models.trade); // Portfolio has many trades
  }
}

module.exports = Portfolio;
