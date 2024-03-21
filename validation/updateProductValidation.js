const { Types } = require('mongoose');

function updateProductValidation(id, body) {
  if (
    !body ||
    (!body.hasOwnProperty('title') && !body.hasOwnProperty('description'))
  ) {
    throw new Error('data is required');
  }

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Check if id is correct!');
  }
}

module.exports = { updateProductValidation };
