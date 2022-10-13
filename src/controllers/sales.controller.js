const { salesService } = require('../services');

const postMultipleSales = async (req, res) => {
  const { status, response } = await salesService.postMultipleSales(req);
  res.status(status).json(response);
};

module.exports = {
  postMultipleSales,
};
