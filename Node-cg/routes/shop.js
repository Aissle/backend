const path = require('path');

const express = require('express');

//const adminController = require('../controllers/admin');
const shopController = require('../controllers/shop')

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/checkout', shopController.checkout);

router.get('/orders', shopController.getOrders);

module.exports = router;



