// const Joi = require('joi'); // Lib validador de dados
const { productsModel } = require('../models');

// const pathSchema = Joi.object({
// x: ...
// y: ...
// })

const getAllProducts = async () => {
  const products = await productsModel.getAll();
  return { status: 200, response: products };
};

const getOneProduct = async (req) => {
  const { id } = req.params;
  const products = await productsModel.getById(id);
  if (!products) return { status: 404, response: { message: 'Product not found' } };
  return { status: 200, response: products };
};

module.exports = {
  getAllProducts,
  getOneProduct,
};
