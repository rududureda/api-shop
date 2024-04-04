const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function loginUser(user) {
  const { username, password } = user;

  if (!username || !password)
    throw new Error('username and password is required');

  const findUser = await User.findOne({ username });
  if (!findUser) throw new Error('username or password incorrect');

  const match = await bcrypt.compare(password, findUser.password);
  if (!match) throw new Error('username or password incorrect');

  //create token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
}

module.exports = loginUser;
