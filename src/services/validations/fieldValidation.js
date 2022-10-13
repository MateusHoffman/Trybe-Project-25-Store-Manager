const { salesModel } = require('../../models');

const postProductValidate = (field) => {
  if (!field) return { status: 400, response: { message: '"name" is required' } };
  if (field.length <= 5) {
    return {
      status: 422,
      response: { message: '"name" length must be at least 5 characters long' },
    };
  }
};

const checkFieldExist = (arrSales) => {
  for (let i = 0; i < arrSales.length; i += 1) {
    // if (arrSales[i].productId) {
    if (!('productId' in arrSales[i])) {
      return { status: 400, response: { message: '"productId" is required' } };
    }
    if (!('quantity' in arrSales[i])) {
      return { status: 400, response: { message: '"quantity" is required' } };
    }
  }
};

const checkFieldValid = (arrSales) => {
  for (let i = 0; i < arrSales.length; i += 1) {
    if (arrSales[i].quantity <= 0) {
      return {
        status: 422, response: { message: '"quantity" must be greater than or equal to 1' },
      };
    }
  }
};

const checkProductExist = async (arrSales) => {
  const produtsForSale = await await salesModel.getAllProductsSale();
  const arrProductsId = produtsForSale.map((e) => e.product_id);
  const arrPossibleProductsId = arrSales.map((e) => e.productId);
  for (let i = 0; i < arrPossibleProductsId.length; i += 1) {
    if (!arrProductsId.some((e) => arrPossibleProductsId[i] === e)) {
      return { status: 404, response: { message: 'Product not found' } };
    }
  }
};

const postSalesValidate = (arrSales) => {
  if (checkFieldExist(arrSales)) return checkFieldExist(arrSales);
  if (checkFieldValid(arrSales)) return checkFieldValid(arrSales);
  if (checkProductExist(arrSales)) return checkProductExist(arrSales);
};

module.exports = {
  postProductValidate,
  postSalesValidate,
};
