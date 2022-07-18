"use strict";
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
exports.createMedia = exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var fs_1 = __importDefault(require("fs"));
var media_service_1 = __importDefault(require("../services/media.service"));
var UPLOAD_PATH = 'uploads';
var mediaService = new media_service_1.default();
var imageFilter = function (req, file, cb) {
    console.log('file: ', req.file);
    req.media = req.file;
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
exports.upload = (0, multer_1.default)({ dest: "".concat(UPLOAD_PATH, "/"), fileFilter: imageFilter }); // apply filter
var createMedia = function (file, userId) { return __awaiter(void 0, void 0, void 0, function () {
    var media, newMedia, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                media = {
                    name: file.name,
                    author: userId,
                    photo: {
                        data: fs_1.default.readFileSync(file.path),
                        contentType: file.mimetype
                    }
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mediaService.createMedia(media)];
            case 2:
                newMedia = _a.sent();
                return [2 /*return*/, newMedia];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createMedia = createMedia;
// import { Request, Response } from 'express';
// import formidable, { Files } from 'formidable';
// import fs from 'fs';
// import IncomingForm from 'formidable/Formidable';
// import MediaService from '../services/media.service';
// const mediaService = new MediaService();
// export const create = (req: Request, res: Response, userId: string): any => {
//   let form: IncomingForm = new formidable.IncomingForm({
//     uploadDir: __dirname + '../../../tmp',
//     keepExtensions: true,
//     maxFileSize: 1 * 1024 * 1024,
//   });
//   const errors: any = [];
//   // form.keepExtensions = true;
//   form.parse(req, async (err, fields, files: any) => {
//     if(err) {
//       errors.push({msg: "Image could not be uploaded..."});
//       // return res.status(400).json({"error": "Image could not be uploaded"});
//       return errors;
//     }
//     // 1kb = 1000
//     // 1mb = 1000000
//     if(files.photo) {
//       console.log('Files photo: ', files.photo);
//       // if(files.photo.size > 1000000) {
//       //   errors.push({msg: "image should be less than 1mb in size"});
//       //   // return res.status(400).json({"error": "image should be less than 1mb in size"})
//       // console.log('errors: ', errors);
//       //   return errors;
//       // }
//       // save image in db
//       // product.photo.data = fs.readFileSync(files.photo.path);
//       // product.photo.contentType = fs.readFileSync(files.photo.type);
//       const media = {
//         name: files.photo.name.split('.')[0],
//         author: userId,
//         photo: {
//           data: fs.readFileSync(files.photo.path),
//           contentType: files.photo.type,
//         },
//         description: '',
//       }
//       try {
//         const newMedia = await mediaService.createMedia(media);
//         console.log('new media: ', newMedia);
//         return newMedia;
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   });
// }
