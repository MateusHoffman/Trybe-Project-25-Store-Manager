const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getOneProduct);
router.post('/', productsController.postProduct);
router.put('/:id', productsController.putProduct);
router.delete('/:id', productsController.deleteProduct);
// router.get('/path/:id', path1Controller.getOneFunction)
// router.post('/path', path1Controller.postFunction)

module.exports = router;
