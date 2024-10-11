const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //console.log('in add product middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
    //next(); //allows the request to continue to the next middleware in line
});

router.post('/product', (req, res, next) => {
    //console.log('in product middleware');
    console.log(req.body);
    res.redirect('/');
    //next(); //allows the request to continue to the next middleware in line
});

module.exports = router;