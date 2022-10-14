const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.post('/', salesController.postMultipleSales);
router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getOneSale);
router.delete('/:id', salesController.deleteOneSale);
router.put('/:id', salesController.putOneSale);
// router.post('/path', path1Controller.postFunction)

module.exports = router;
