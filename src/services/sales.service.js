const { salesModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.getAll();
  return { status: 200, response: sales };
};

const getOneSale = async (req) => {
  const { id } = req.params;
  const sale = await salesModel.getById(id);
  if (sale && !sale.length) return { status: 404, response: { message: 'Sale not found' } };
  return { status: 200, response: sale };
};

const postMultipleSales = async (arrSale) => {
  const id = await salesModel.postSales(arrSale);
  return { status: 201, response: { id, itemsSold: [...arrSale] } };
};

const deleteOneSale = async (req) => {
  const { id } = req.params;
  const saleExist = await salesModel.getSaleById(id);
  if (!saleExist) return { status: 404, response: { message: 'Sale not found' } };
  await salesModel.deleteById(id);
  return { status: 204 };
};

const putOneSale = async (req) => {
  const { id } = req.params;
  const arrSales = req.body;
  const saleProductExist = await salesModel.getSaleById(id);
  if (!saleProductExist) return { status: 404, response: { message: 'Sale not found' } };

  await salesModel.deleteSaleProductsById(id);
  await salesModel.postSaleUpdate(arrSales, id);

  return { status: 200, response: { saleId: id, itemsUpdated: arrSales } };
};

module.exports = {
  getAllSales,
  getOneSale,
  postMultipleSales,
  deleteOneSale,
  putOneSale,
};
