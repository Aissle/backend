const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'add Product', 
        path: '/admin/add-product',
    });
};

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title;
    const imageUrl= req.body.imageUrl;
    const price= req.body.price;
    const description= req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getEditProducts = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode) {
        return res.redirect('/');
    }
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product', 
        path: '/admin/edit-product',
    });
};

exports.getProducts =  (req,res,next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    });
};

