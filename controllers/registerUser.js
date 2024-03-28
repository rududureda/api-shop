const User = require('../models/productModel');
const {
  registerUserValidation,
} = require('../validation/registerUserValidation');

async function registerUser(user) {
  registerUserValidation(user);

  const userExists = await User.find();

  if (userExists?.length) throw new Error('User already exists');

  const newUser = await User.create(user);

  return newUser;
}

module.exports = registerUser;
