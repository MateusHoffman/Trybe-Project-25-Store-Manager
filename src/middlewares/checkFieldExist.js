const checkFieldExist = async (req, res, next) => {
  const arrSale = req.body;
  for (let i = 0; i < arrSale.length; i += 1) {
      if (!('productId' in arrSale[i])) {
        return res.status(400).json({ message: '"productId" is required' });
      }
      if (!('quantity' in arrSale[i])) {
        return res.status(400).json({ message: '"quantity" is required' });
      }
  }
  return next();
};

module.exports = checkFieldExist;
