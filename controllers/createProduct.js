const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

async function createProduct(props) {
  console.log(props);

  const response = await Product.create({
    title: 'Barnis',
    description: 'test',
  });

  return response;
}

module.exports = createProduct;
