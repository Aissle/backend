const Product = require('../models/product');


exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'All Products',
            path: '/',
            asProds: products.length > 0,
            //productCSS: true, 
            //activeShop: true
        });
    });
};

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'shop',
            path: '/',
            asProds: products.length > 0,
            //productCSS: true, 
            //activeShop: true
        });
    });
};


exports.getCart =  (req,res,next) => {
    //Product.fetchAll(products => {
        res.render('shop/cart', {
            //prods: products, 
            pageTitle: 'Your Cart',
            path: '/cart',
            //asProds: products.length > 0,
        });
        //});
};

exports.checkout =  (req,res,next) => {
    //Product.fetchAll(products => {
        res.render('shop/checkout', {
            //prods: products, 
            pageTitle: 'Checkout', 
            path: '/products',
            //asProds: products.length > 0,
        });
        //});
};
