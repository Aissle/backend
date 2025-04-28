const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

const errController = require('./controllers/errController');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

app.use(bodyParser.urlencoded({extended: false}));        
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

sequelize
    .sync({force: true})
    .then(result => {
        //console.log(result);
        app.listen(4000 );
    })
    .catch(err => {
        console.log(err);
    });




//node.js
// path
//http
//npm
//nodemon
//express
//body-parser
// pug, est, and handlebars.