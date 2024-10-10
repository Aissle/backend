const http = require('http');

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('in add product middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
    //next(); //allows the request to continue to the next middleware in line
});

app.use('/product', (req, res, next) => {
    console.log('in product middleware');
    console.log(req.body);
    res.redirect('/');
    //next(); //allows the request to continue to the next middleware in line
});

app.use('/', (req,res,next) => {
    console.log('in home middleware');
    res.send('<h1>home Page!</h1>');
});
app.listen(4000);

//node.js
//npm
//nodemon
//express
//body-parser