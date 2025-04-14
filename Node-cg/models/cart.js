const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart{
    static addProduct(id, productPrice) {
        //Fetch the prvious cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if(!err) {
                cart = JSON.parse(fileContent);
            }
        //Analyse the cart => Find existing product
        const exsistingProductIndex = cart.products.findIndex(
            prod => prod.id === id
        );
        const existingProduct = cart.products[exsistingProductIndex];
        let updateProduct;
        //Add new product/ increase quantity
        if (existingProduct) {
            updateProduct = {...existingProduct};
            updateProduct.qty = updateProduct.qty + 1;
            cart.products = [...cart.products];
            cart.products[exsistingProductIndex] = updateProduct;
        } else {
            updateProduct = { id: id, qty: 1 };
            cart.products = [...cart.products, updateProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice;
        fs.writeFile(p, JSON.stringify(cart), err => {
            console.log(err);
        });
        });    
    }
};