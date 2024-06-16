const { Model } = require("sequelize");

class Share extends Model {
  constructor(sequelize, DataTypes) {
    return sequelize.define('share', {
      symbol: {
        type: DataTypes.STRING(3),
        allowNull: false,
        validate: {
          isUppercase: true,
          len: [3, 3]
        }
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
      sharedate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW
      }
    }, {
      indexes: [
        {
          unique: true,
          fields: ['symbol', 'sharedate']
        }
      ]
    });
  }

  static associate(models) {
    this.hasMany(models.Trade);
  }
}

module.exports = Share;
