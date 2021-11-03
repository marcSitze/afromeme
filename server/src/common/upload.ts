import multer from 'multer';
import * as path from 'path';
import fs from 'fs';
import MediaService from '../services/media.service';

const UPLOAD_PATH: string = 'uploads';
const mediaService = new MediaService();

const imageFilter = function (req: any, file: any, cb: any) {
  console.log('file: ', req.file);
  req.media = req.file;
  // accept image only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

export const upload = multer({ dest: `${UPLOAD_PATH}/`, fileFilter: imageFilter }); // apply filter

export const createMedia = async (file: any, userId: string) => {
  const media = {
    name: file.name,
    author: userId,
    photo: {
      data: fs.readFileSync(file.path),
      contentType: file.mimetype
    }
  };
  try {
    const newMedia = await mediaService.createMedia(media);
    return newMedia;
  } catch (err) {
    console.error(err);
  }
}


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