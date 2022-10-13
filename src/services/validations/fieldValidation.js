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

const checkFieldExist = (arrSales, lengthArrSales) => {
  for (let i = 0; i < lengthArrSales; i += 1) {
    if (!('productId' in arrSales[i])) {
      return { status: 400, response: { message: '"productId" is required' } };
    }
    if (!('quantity' in arrSales[i])) {
      return { status: 400, response: { message: '"quantity" is required' } };
    }
  }
};

const checkFieldValid = (arrSales) => {
  for (let i = 0; i < (arrSales && arrSales.length); i += 1) {
    if (arrSales[i].quantity <= 0) {
      return {
        status: 422, response: { message: '"quantity" must be greater than or equal to 1' },
      };
    }
  }
};

const getArrProductsForSale = async (arrSales) => {
  const productsForSale = await salesModel.getAllProductsSale();
  const arrProductsId = productsForSale && productsForSale.map((e) => e.product_id);
  const arrPossibleProductsId = arrSales && arrSales.map((e) => e.productId);
  return { arrProductsId, arrPossibleProductsId };
};

const checkProductExist = async (arrSales) => {
  const { arrProductsId, arrPossibleProductsId } = await getArrProductsForSale(arrSales);
  for (let i = 0; i < (arrPossibleProductsId && arrPossibleProductsId.length); i += 1) {
    if (!arrProductsId.some((e) => arrPossibleProductsId[i] === e)) {
      return { status: 404, response: { message: 'Product not found' } };
    }
  }
};

const postSalesValidate = (arrSales, lengthArrSales) => {
  if (checkFieldExist(arrSales, lengthArrSales)) return checkFieldExist(arrSales, lengthArrSales);
  if (checkFieldValid(arrSales)) return checkFieldValid(arrSales);
  if (checkProductExist(arrSales)) return checkProductExist(arrSales);
};

module.exports = {
  postProductValidate,
  postSalesValidate,
};
