const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req,res,next) => {
    Product.fetchAll()
        .then(([rows, fieldData])=> {
            res.render('shop/index', {
                prods: rows, 
                pageTitle: 'shop',
                path: '/',
            });
        })
        .catch(err => console.log(err));
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll()
    .then(([rows, fieldData])=> {
        res.render('shop/product-list', {
            prods: rows, 
            pageTitle: 'All Products',
            path: '/products',
        });
    })
    .catch(err => console.log(err));
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
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products) {
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                if (cartProductData) {
                    cartProducts.push({productData: product, qty: cartProductData.qty});
                }
            }
            res.render('shop/cart', {
                products: cartProducts,
                pageTitle: 'Your Cart',
                path: '/cart'
            });
        })
        
    }); 
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
