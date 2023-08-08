import express from 'express'
const productController = require('../controllers/products');
const router = express.Router();

router.get('/', productController.index);

// router.get('/', productController.index);
// router.get('/:productId', productController.show);

// router.delete('/:productId', productController.deleteItem);

// router.put('/:productId', productController.edit);

// router.post('/', productController.create);

module.exports = router;