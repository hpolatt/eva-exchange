class Trade {
    constructor(sequelize, DataTypes) {
      return sequelize.define('trade', {
        type: DataTypes.ENUM('BUY', 'SELL'),
        shareId: DataTypes.INTEGER,
        portfolioId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER
      });
    }
  }
  
  module.exports = Trade;
  