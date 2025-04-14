const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'shop',
            path: '/',
        });
    });
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'All Products',
            path: '/products',
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle:  product.pageTitle,
            path: '/products'
        });
    });
};

exports.getCart =  (req,res,next) => {
    //Product.fetchAll(products => {
        res.render('shop/cart', {
            //prods: products, 
            pageTitle: 'Your Cart',
            path: '/cart',
        });
        //});
};

exports.postCart =  (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) =>{
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.checkout =  (req,res,next) => {
    //Product.fetchAll(products => {
        res.render('shop/checkout', {
            //prods: products, 
            pageTitle: 'Checkout', 
            path: '/checkout',
        });
        //});
};

 
exports.getOrders =  (req,res,next) => {
    //Product.fetchAll(products => {
        res.render('shop/orders', {
            //prods: products, 
            pageTitle: 'Orders', 
            path: '/orders',
        });
        //});
};
