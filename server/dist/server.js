"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    res.send("working!");
});
const sequelize = new sequelize_1.Sequelize('keep', 'root', 'Hjsywt45s2w3#', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log('Connection successful!');
}).catch((error) => console.log(error));
app.listen(3000);
