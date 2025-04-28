const Sequelize = require('sequelize');
const sequelize = require('../util/database'); // Adjust the path to your database configuration

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,allowNull: false
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

module.exports = User;