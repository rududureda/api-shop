const { Router } = require('express');

const routerSetter = Router();

routerSetter.post('/', (req, res) => {
  res.send('create new product');
});

routerSetter.patch('/:id', (req, res) => {
  res.send('id all good');
});

module.exports = routerSetter;
