const { Router } = require('express');
const { createProduct, updateProduct } = require('../controllers');

const routerSetter = Router();

routerSetter.post('/', async (req, res) => {
  try {
    const data = await createProduct(req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

routerSetter.patch('/:id', (req, res) => {
  const data = updateProduct();
  res.json(data);
});

module.exports = routerSetter;
