class User {
  constructor(sequelize, DataTypes) {
    return sequelize.define('user', {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
  }
}

module.exports = User;
