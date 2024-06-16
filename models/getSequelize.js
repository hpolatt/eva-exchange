const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    "host": process.env.DB_HOST,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "dialect": "postgres"
});

module.exports = () => {
    return sequelize;
}