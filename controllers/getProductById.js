const Product = require('../models/productModel');

async function getProductById(id) {
  const response = await Product.findById(id);

  return response;
}

module.exports = getProductById;
