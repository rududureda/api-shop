function createProductValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error('Title is not provided.');
  }
  if (!props?.description?.trim()) {
    throw new Error('Description is not provided.');
  }
}

module.exports = { createProductValidation };
