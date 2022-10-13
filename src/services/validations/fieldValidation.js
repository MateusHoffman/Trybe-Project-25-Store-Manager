const postProductValidate = (field) => {
  if (!field) return { status: 400, response: { message: '"name" is required' } };
  if (field.length <= 5) {
    return {
      status: 422,
      response: { message: '"name" length must be at least 5 characters long' },
    };
  }
};

module.exports = {
  postProductValidate,
};
