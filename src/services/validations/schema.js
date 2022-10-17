const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const newSaleSchema = Joi.object({
  productId: idSchema,
  quantity: idSchema,
});

module.exports = {
  newSaleSchema,
};
