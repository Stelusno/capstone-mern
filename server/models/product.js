"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    slug: {
        type: String,
        required: [true, 'Slug is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    countInStock: {
        type: Number,
        required: [true, 'CountInStock is required'],
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
}, { timestamps: true });
module.exports = mongoose_1.default.model('Product', productSchema);
