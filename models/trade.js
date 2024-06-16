const { Model, DataTypes } = require("sequelize");
const sequelize = require("./getSequelize");

class Trade extends Model {
    static associate(models) {
        this.belongsTo(models.portfolio);
        this.belongsTo(models.share);
      }
  }
  
  Trade.init({
    type: DataTypes.ENUM('BUY', 'SELL'),
    shareId: DataTypes.INTEGER,
    portfolioId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, { sequelize: sequelize(), modelName: 'trade' });

  module.exports = Trade;
  