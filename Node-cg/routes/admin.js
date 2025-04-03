const path = require('path');

const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products');

//admin
router.get('/add-product', productsController.getAddProducts);

router.post('/add-product', productsController.postAddProducts);

router.get('/products', productsController.adminProducts);

module.exports = router;