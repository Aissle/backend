const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));
// app.use('/', (req, res, next) => {
//     //console.log('This always runs!');
//     next();
// });

app.use('/admin', adminData.routers);
app.use(shopRoutes);
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});
app.listen(4000 );

//node.js
// path
//http
//npm
//nodemon
//express
//body-parser

