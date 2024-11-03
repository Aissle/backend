const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const products = [];

//admin/add-product
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'add Product', 
        active: 'add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true})
    //console.log('in add product middleware!');
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //next(); //allows the request to continue to the next middleware in line
});

router.post('/add-product', (req, res, next) => {
    //console.log('in product middleware');
    const justATest = req.body;
    //console.log(req.body);
    products.push({title: req.body.title})
    res.redirect('/');
    //next(); //allows the request to continue to the next middleware in line
});

exports.routers = router;
exports.products = products;