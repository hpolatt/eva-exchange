const { Model, DataTypes } = require("sequelize");
const sequelize = require("./getSequelize");

class Share extends Model {
  static associate(models) {
    this.hasMany(models.trade);
  }
}

Share.init({
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
  }, { sequelize: sequelize(), modelName: 'share' });

module.exports = Share;


  // indexes: [
  //   {
  //     unique: true,
  //     fields: ['symbol', 'sharedate']
  //   }
  // ]