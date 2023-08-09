import express from 'express'
const router = express.Router();
const productsRouter = require('./products');

//			'/api'

router.use('/products', productsRouter);


module.exports = router;
