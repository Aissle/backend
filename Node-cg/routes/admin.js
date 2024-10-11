const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //console.log('in add product middleware!');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    //next(); //allows the request to continue to the next middleware in line
});

router.post('/add-product', (req, res, next) => {
    //console.log('in product middleware');
    console.log(req.body);
    res.redirect('/');
    //next(); //allows the request to continue to the next middleware in line
});

module.exports = router;