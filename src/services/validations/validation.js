const {
  newSaleSchema,
} = require('./schema');

const validateNewSale = (sale) => {
  const { error } = newSaleSchema.validate(sale);
  if (error) {
    return {
      status: error.message.includes('greater than')
        ? 422
        : 400,
      response: error.message,
    };
  }
  return { status: null, response: null };
};

module.exports = {
  validateNewSale,
};
