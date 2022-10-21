"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
app_1.default.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
(0, database_1.connectToDatabase)();
