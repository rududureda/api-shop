const { Types } = require('mongoose');
const {
  updateProductValidation,
} = require('../validation/updateProductValidation');
const Product = require('../models/productModel');

async function updateProduct(id, body) {
  updateProductValidation(id, body);

  const response = await Product.findByIdAndUpdate(id, body, { new: true });

  return response;
}

module.exports = updateProduct;
