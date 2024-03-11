const express = require('express');
const app = express();
const PORT = 3000;

const productGetterRoutes = require('./routes/productGetterRoutes');
const productSetterRoutes = require('./routes/productSetterRoutes');

app.use('/product', productGetterRoutes);
app.use('/product', productSetterRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
