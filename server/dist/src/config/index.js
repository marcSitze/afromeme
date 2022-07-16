"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.default = {
    app: {
        name: process.env.APP_NAME,
        port: process.env.PORT || 5000,
        environment: process.env.APPLICATION_ENV,
        host: process.env.HOST || 'http://localhost:5000'
    },
    mongo: {
        MONGO_LOCAL: process.env.MONGO_LOCAL || 'mongodb://localhost:27017/afromeme',
        MONGO_ONLINE: process.env.MONGO_ONLINE,
        MONGO_TEST_DB: process.env.MONGO_TEST_DB || 'mongodb://localhost:27017/testAfromeme',
    },
    auth: {
        jwt_secret: process.env.JWT_SECRET || 'my-ultra-secret-jwt',
        saltRounds: 10
    },
};
