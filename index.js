const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = 3000;

app.use(cors());
app.use(express.json());

const productGetterRoutes = require('./routes/productGetterRoutes');
const productSetterRoutes = require('./routes/productSetterRoutes');
app.get("/", (req, res) => res.send("Express on Vercel"));


app.use('/product', productGetterRoutes);
app.use('/product', productSetterRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log('Database connected');
  } catch (err) {
    console.log('Error', err.massage);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
