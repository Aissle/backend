const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Aminat', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;