const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getOneProduct);
router.post('/', productsController.postProduct);
// router.get('/path/:id', path1Controller.getOneFunction)
// router.post('/path', path1Controller.postFunction)
// router.put('/path/:id', path1Controller.putFunction)
// router.delete('/path/:id', path1Controller.deleteFunction)

module.exports = router;
