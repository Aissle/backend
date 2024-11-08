const products = [];

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'add Product', 
        active: 'add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true})
};

exports.postAddProducts = (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/');
};

exports.getProducts = (req,res,next) => {
    res.render('shop', {
        prods: products, 
        pageTitle: 'shop',
        active: 'shop', 
        asProds: products.length > 0,
        productCSS: true, 
        activeShop: true
    });
};