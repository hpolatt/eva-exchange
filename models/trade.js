const { Model } = require("sequelize");

class Trade extends Model {
    constructor(sequelize, DataTypes) {
      return sequelize.define('trade', {
        type: DataTypes.ENUM('BUY', 'SELL'),
        shareId: DataTypes.INTEGER,
        portfolioId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER
      });
    }

    static associate(models) {
        this.belongsTo(models.Portfolio);
        this.belongsTo(models.Share);
      }
  }
  
  module.exports = Trade;
  