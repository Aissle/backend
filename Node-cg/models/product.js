const Sequilize = require('sequelize');
const sequelize = require('../util/database');


const Product = sequelize.define('product', {
    id: {
        type: Sequilize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequilize.STRING,
        allowNull: false
    },
    price: Sequilize.STRING,
    imageUrl: {
        type: Sequilize.STRING,
        allowNull: false
    },
    description: {
        type: Sequilize.STRING,
        allowNull: false
    }
});

module.exports = Product;