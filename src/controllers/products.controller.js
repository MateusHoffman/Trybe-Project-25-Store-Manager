const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const { status, response } = await productsService.getAllProducts();
  res.status(status).json(response);
};

const getOneProduct = async (req, res) => {
  const { status, response } = await productsService.getOneProduct(req);
  res.status(status).json(response);
};

const postProduct = async (req, res) => {
  const { status, response } = await productsService.postProduct(req);
  res.status(status).json(response);
};

const putProduct = async (req, res) => {
  const { status, response } = await productsService.putProduct(req);
  res.status(status).json(response);
};

const deleteProduct = async (req, res) => {
  const { status, response } = await productsService.deleteProduct(req);
  res.status(status).json(response);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
