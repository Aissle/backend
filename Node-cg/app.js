const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));
// app.use('/', (req, res, next) => {
//     //console.log('This always runs!');
//     next();
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req,res,next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found', 
        active: "404"
        //layout: false
        });
    //sendFile(path.join(rootDir, 'views', '404.html'));
});
app.listen(4000 );

//node.js
// path
//http
//npm
//nodemon
//express
//body-parser
// pug, est, and handlebars