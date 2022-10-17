const { productsModel } = require('../models');

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

const postProduct = async (req) => {
  const { name } = req.body;
  const request = { name };
  const id = await productsModel.post(request);
  return { status: 201, response: { ...request, id } };
};

const putProduct = async (req) => {
  const { id } = req.params;
  const { name } = req.body;
  const productExist = await productsModel.getById(id);
  if (productExist === undefined) {
    return { status: 404, response: { message: 'Product not found' } };
  }
  const result = await productsModel.put(name, id);
  return result && { status: 200, response: { name, id } };
};

const deleteProduct = async (req) => {
  const { id } = req.params;
  const productExist = await productsModel.getById(id);
  if (productExist === undefined) {
    return { status: 404, response: { message: 'Product not found' } };
  }
  const result = await productsModel.deleteById(id);
  return result && { status: 204 };
};

module.exports = {
  getAllProducts,
  getOneProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
