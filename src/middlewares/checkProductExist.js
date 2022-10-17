const { productsModel } = require('../models');

const checkProductExist = async (req, res, next) => {
  const arrSale = req.body;
  const result = arrSale.map(async ({ productId }) => {
    const findId = await productsModel.getById(productId);
    if (!findId) return [404, 'Product not found'];
  });
  const awaitResult = await Promise.all(result);
  const validate = awaitResult.some((item) => item !== undefined);
  const filtered = awaitResult.filter((item) => item !== undefined)[0];
  if (validate) {
    return res.status(filtered[0]).json({ message: filtered[1] });
  }
  next();
};

module.exports = checkProductExist;
