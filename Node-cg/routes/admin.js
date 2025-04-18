const path = require('path');

const express = require('express');

const router = express.Router();
const adminController = require('../controllers/admin');

//admin
router.get('/add-product', adminController.getAddProducts);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProducts);

router.get('/edit-product/:prodId', adminController.getEditProducts);

router.post('/edit-product', adminController.postEditProducts);

router.post('/delete-product', adminController.postDeleteProducts);

module.exports = router;