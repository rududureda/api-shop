const { Router } = require('express');
const { createProduct, updateProduct } = require('../controllers');
const verifyJWT = require('../middlewares/verifyJWT');

const routerSetter = Router();

routerSetter.post('/', verifyJWT, async (req, res) => {
  try {
    const data = await createProduct(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

routerSetter.patch('/:id', async (req, res) => {
  try {
    const data = await updateProduct(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

module.exports = routerSetter;
