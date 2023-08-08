import { Request, Response } from 'express';
const Product = require('../models/product')

module.exports = {
    index
}
 
async function index(req: Request, res: Response) {
    try {
      const productItems = await Product.find();
      res.status(200).json(productItems);
	} catch (err) {
		res.status(400).json({error: err});
	}
  }