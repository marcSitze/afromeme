"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountsByQuery = exports.getAccounts = exports.updateAccount = exports.getAccount = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var account_service_1 = __importDefault(require("../services/account.service"));
var response_handler_1 = require("../common/response.handler");
var constants_1 = __importDefault(require("../common/constants"));
var httpStatus = constants_1.default.httpStatus;
var accountService = new account_service_1.default();
var getAccount = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var account, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                console.log("req.token: ", req.token);
                account = void 0;
                if (!(req.params.id && mongoose_1.default.Types.ObjectId.isValid(req.params.id))) return [3 /*break*/, 2];
                return [4 /*yield*/, accountService.findOne({ _id: req.params.id })];
            case 1:
                account = _a.sent();
                console.log('Here');
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, accountService.findOne({ user: req.user.id })];
            case 3:
                account = _a.sent();
                console.log('Below');
                _a.label = 4;
            case 4:
                // const account = await accountService.findOne({_id: req.params.id});
                // console.log('accountS: ', account)
                if (!account) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NOT_FOUND, { msg: "User not found" })];
                }
                return [2 /*return*/, (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, account)];
            case 5:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.INTERNAL_SERVER_ERROR, "Something went wrong")];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getAccount = getAccount;
var updateAccount = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, account, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, accountService.getAccountById(req.params.id)];
            case 2:
                account = _a.sent();
                if (!account) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NOT_FOUND, "User not found")];
                }
                return [4 /*yield*/, accountService.updateAccount(req.params.id, query)];
            case 3:
                _a.sent();
                (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, "account updated successfully");
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                console.error(err_2);
                (0, response_handler_1.ErrorHandler)(res, httpStatus.INTERNAL_SERVER_ERROR, "Something went wrong");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateAccount = updateAccount;
var getAccounts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var accounts, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, accountService.getAccounts({})];
            case 1:
                accounts = _a.sent();
                if (accounts.length === 0) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NO_CONTENT, "No accounts yet")];
                }
                (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, accounts);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAccounts = getAccounts;
var getAccountsByQuery = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, accounts, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = __assign({}, req.query);
                return [4 /*yield*/, accountService.getAccounts(query)];
            case 1:
                accounts = _a.sent();
                if (!accounts) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NOT_FOUND, { msg: "User not found" })];
                }
                return [2 /*return*/, (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, accounts)];
            case 2:
                err_4 = _a.sent();
                console.log(err_4);
                return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.INTERNAL_SERVER_ERROR, "Something went wrong")];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAccountsByQuery = getAccountsByQuery;
