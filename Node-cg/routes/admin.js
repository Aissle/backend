const path = require('path');

const express = require('express');

const router = express.Router();
const adminController = require('../controllers/admin');

//admin
router.get('/add-product', adminController.getAddProducts);

router.get('/products', adminController.adminProducts);

router.post('/add-product', adminController.postAddProducts);



module.exports = router;