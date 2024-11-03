const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req,res,next) => {
    //console.log('in home middleware');
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'shop',
        active: 'shop', 
        asProds: products.length > 0,
        productCSS: true, 
        activeShop: true
    });
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;