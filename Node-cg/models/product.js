const Sequilize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
    id: {
        typr: Sequilize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: sequelize.STRING,
    price: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequilize.STRING,
        allowNull: false
    }
});

module.exports = Product;