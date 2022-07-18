"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.SuccessHandler = void 0;
var SuccessHandler = function (res, statusCode, data) {
    return res.status(statusCode).json({
        success: true,
        data: data
    });
};
exports.SuccessHandler = SuccessHandler;
var ErrorHandler = function (res, statusCode, data) {
    return res.status(statusCode).json({
        success: false,
        data: data
    });
};
exports.ErrorHandler = ErrorHandler;
