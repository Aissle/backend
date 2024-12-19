const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'add Product', 
        active: 'add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true})
};

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products, 
            pageTitle: 'shop',
            active: 'shop',
            asProds: products.length > 0,
            productCSS: true, 
            activeShop: true
        });
    });
};