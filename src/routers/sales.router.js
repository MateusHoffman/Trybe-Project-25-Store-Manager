const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.post('/', salesController.postMultipleSales);
// router.get('/', salesController.getAllsales);
// router.get('/path/:id', path1Controller.getOneFunction)
// router.post('/path', path1Controller.postFunction)
// router.put('/path/:id', path1Controller.putFunction)
// router.delete('/path/:id', path1Controller.deleteFunction)

module.exports = router;
