const express = require('express');
const productsController = require('../controllers/products.controller');
const validateProductName = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getOneProduct);
router.post('/', validateProductName, productsController.postProduct);
router.put('/:id', validateProductName, productsController.putProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
