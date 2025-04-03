const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');
const userController = require('../controllers/user')

const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/cart', userController.cart);

router.get('/Products', userController.products);

module.exports = router;



