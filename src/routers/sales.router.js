const express = require('express');
const salesController = require('../controllers/sales.controller');
const { checkFieldExist, checkFieldValid, checkProductExist } = require('../middlewares');

const router = express.Router();

router.post('/',
  checkFieldExist,
  checkFieldValid,
  checkProductExist,
  salesController.postMultipleSales);
router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getOneSale);
router.delete('/:id', salesController.deleteOneSale);
router.put('/:id',
  checkFieldExist,
  checkFieldValid,
  checkProductExist,
  salesController.putOneSale);

module.exports = router;
