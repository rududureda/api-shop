const Product = require('../models/productModel');

function getAllProducts() {
  const products = Product.find({});

  return products;
}

module.exports = getAllProducts;
