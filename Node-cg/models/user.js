const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path to your database configuration

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,allowNull: false
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

module.exports = User;