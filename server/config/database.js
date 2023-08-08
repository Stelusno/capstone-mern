"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not defined.');
}
mongoose_1.default.connect(process.env.DATABASE_URL);
const db = mongoose_1.default.connection;
db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
