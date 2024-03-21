const { Router } = require('express');
const { getAllProducts, getProductById } = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ error: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const data = await getProductById(productId);

    res.json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
