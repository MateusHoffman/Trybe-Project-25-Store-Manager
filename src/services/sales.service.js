const { salesModel } = require('../models');
const { postSalesValidate } = require('./validations/fieldValidation');

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

const postMultipleSales = async (req) => {
  const arrSales = await req.body;
  const lengthArrSales = arrSales && arrSales.length;
  const resultValidation = await postSalesValidate(arrSales, lengthArrSales);
  if (resultValidation) return resultValidation;

  const id = await salesModel.postSales(arrSales);

  return { status: 201, response: { id, itemsSold: [...arrSales] } };
};

module.exports = {
  getAllSales,
  getOneSale,
  postMultipleSales,
};
