class Share {
  constructor(sequelize, DataTypes) {
    return sequelize.define('share', {
      symbol: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          is: /^[A-Z]{3}$/
        }
      },
      price: {
        type: DataTypes.FLOAT,
        validate: {
          isFloat: true,
          min: 0
        }
      }
    });
  }
}

module.exports = Share;
