const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req,res,next) => {
    Product.findAll()
        .then(products => {
            res.render('shop/index', {
                prods: products, 
                pageTitle: 'shop',
                path: '/',
            });
        })
        .catch(err => console.log(err));
        
};

exports.getProducts = (req,res,next) => {
    Product.findAll()
        .then(products => {
            res.render('shop/product-list', {
                prods: products, 
                pageTitle: 'All Products',
                path: '/products',
            });
        })
        .catch(err => console.log(err));
};


exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findByPk(prodId)
        .then((product) => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle:  product.pageTitle,
                path: '/products'
            });
        })
        .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
    req.user
        .getCart()
        .then(cart => {
            return cart
                .getProducts()
                .then(products => {
                    res.render('shop/cart', {
                        products: products,
                        pageTitle: 'Your Cart',
                        path: '/cart'
                    });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};



exports.postCart =  (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) =>{
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.postCartDeleteProduct = (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) =>{
        Cart.deleteProduct(prodId, product.price);
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
