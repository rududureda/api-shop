const { Router } = require('express');
const { registerUser } = require('../controllers');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const data = await registerUser(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log(`Error:${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
