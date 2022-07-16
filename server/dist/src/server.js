"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbConfig_1 = __importDefault(require("./config/dbConfig"));
var index_1 = __importDefault(require("./config/index"));
var index_2 = __importDefault(require("./index"));
// application dbconnection
(0, dbConfig_1.default)(index_1.default.mongo.MONGO_LOCAL);
var PORT = index_1.default.app.port;
console.log('configs: ', index_1.default);
index_2.default.listen(PORT, function () {
    console.log("Server has started! on port ".concat(PORT));
});
