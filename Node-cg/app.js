const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errController = require('./controllers/errController');
const mongoConnect = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));        
app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
    // User.findByPk(1)
    //     .then(user => {
    //         req.user = user;
    //         next();
    //     })
    //     .catch(err => console.log(err));
});

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(errController.get404);

mongoConnect(client => {
    console.log(client);
    app.listen(3000);
});


//node.js
// path
//http
//npm
//nodemon
//express
//body-parser
// pug, est, and handlebars.