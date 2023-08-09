"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController = require('../controllers/products');
const router = express_1.default.Router();
router.get('/', productController.index);
// router.get('/', productController.index);
// router.get('/:productId', productController.show);
// router.delete('/:productId', productController.deleteItem);
// router.put('/:productId', productController.edit);
// router.post('/', productController.create);
module.exports = router;
