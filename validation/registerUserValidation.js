function registerUserValidation(props) {
  if (!props?.username?.trim()) {
    throw new Error('Username is not provided.');
  }
  if (!props?.password?.trim()) {
    throw new Error('Password is not provided.');
  }
}

module.exports = { registerUserValidation };
