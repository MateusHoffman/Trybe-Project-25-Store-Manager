const { salesService } = require('../services');

const getAllSales = async (req, res) => {
  const { status, response } = await salesService.getAllSales();
  res.status(status).json(response);
};

const getOneSale = async (req, res) => {
  const { status, response } = await salesService.getOneSale(req);
  res.status(status).json(response);
};

const postMultipleSales = async (req, res) => {
  const { status, response } = await salesService.postMultipleSales(req);
  res.status(status).json(response);
};

module.exports = {
  getAllSales,
  getOneSale,
  postMultipleSales,
};
