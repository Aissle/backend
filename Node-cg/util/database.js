const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Aminat', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

//docs.sequilizejs.com to learn more abotu how it works
//  and how to configure it