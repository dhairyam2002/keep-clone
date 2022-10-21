"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || "keep", process.env.DB_USER || "root", process.env.DB_PASSWORD || "Hjsywt45s2w3#", {
    dialect: 'mysql',
    'host': 'localhost'
});
const connectToDatabase = () => {
    exports.sequelize.authenticate().then(() => {
        console.log('Connection successful!');
    }).catch((error) => console.log(error));
};
exports.connectToDatabase = connectToDatabase;
