class Portfolio {
  constructor(sequelize, DataTypes) {
    return sequelize.define('portfolio', {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    });
  }
}

module.exports = Portfolio;
