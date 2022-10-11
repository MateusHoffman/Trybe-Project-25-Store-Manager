const { productsService } = require('../services');

const getAllProducts = async (req, res) => {
  const { status, response } = await productsService.getAllProducts(req);
  res.status(status).json(response);
};

const getOneProduct = async (req, res) => {
  const { status, response } = await productsService.getOneProduct(req);
  res.status(status).json(response);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  // post...,
  // put...,
  // delete...,
};
