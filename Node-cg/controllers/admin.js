const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'add Product',
        path: '/admin/add-product',
        editing: false
    });
};

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title;
    const imageUrl= req.body.imageUrl;
    const price= req.body.price;
    const description= req.body.description;
    Product.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    })
    .then((result) => {
        console.log('Created a product');
        res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getEditProducts = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.prodId;
    Product.findByPk(prodId)
        .then(product => {
            if (!product) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product
            });
        })
        .catch(err => console.log(err));
};

exports.postEditProducts = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    Product.findByPk(prodId)
        .then( product => {
            product.title = updatedTitle;
            product.imageUrl = updatedImageUrl;
            product.description = updatedDesc;
            product.price = updatedPrice;
            return product.save();
        })
        .then(result => {
            console.log('UPDATED PRODUCT!');
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
        
    
}
exports.getProducts =  (req,res,next) => {
    Product.findAll()
        .then( products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
        })
        .catch(err => console.log(err));
};

exports.postDeleteProducts = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('/admin/products')
}
