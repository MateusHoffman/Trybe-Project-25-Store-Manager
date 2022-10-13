const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.post('/', salesController.postMultipleSales);
router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getOneSale);
// router.post('/path', path1Controller.postFunction)
// router.put('/path/:id', path1Controller.putFunction)
// router.delete('/path/:id', path1Controller.deleteFunction)

module.exports = router;
