const checkFieldValid = async (req, res, next) => {
  const arrSale = req.body;
  const result = arrSale.map(async ({ quantity }) => {
    if (quantity <= 0) return [422, '"quantity" must be greater than or equal to 1'];
    if (!quantity) return [400, '"quantity" is required'];
  });
  const awaitResult = await Promise.all(result);
  const validate = awaitResult.some((item) => item !== undefined);
  const filtered = awaitResult.filter((item) => item !== undefined)[0];
  if (validate) {
    return res.status(filtered[0]).json({ message: filtered[1] });
  }
  next();
};

module.exports = checkFieldValid;
