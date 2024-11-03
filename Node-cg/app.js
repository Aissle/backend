const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs.engine({ layoutsDir: 'views/layouts', extname: 'hbs', defaultLayout: 'main-layout'}));
app.set('view engine', 'hbs');
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
    res.status(404).render('404', {
        pageTitle: 'Page Not Found', 
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

//- https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=3898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D