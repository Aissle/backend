exports.cart =  (req,res,next) => {
    //Product.fetchAll(products => {
        res.render('shop/cart', {
            //prods: products, 
            pageTitle: 'Cart',
            path: '/cart',
            //asProds: products.length > 0,
        });
        //});
};
    
exports.products =  (req,res,next) => {
    //Product.fetchAll(products => {
        res.render('shop/product-detail', {
            //prods: products, 
            pageTitle: 'Products',
            path: '/products',
            //asProds: products.length > 0,
        });
        //});
};