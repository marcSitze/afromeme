// import * as multer from 'multer';
// import * as path from 'path';
// const UPLOAD_PATH: string = 'uploads';

// const upload = multer({ dest: `${UPLOAD_PATH}/`, fileFilter: imageFilter }); // apply filter

// const imageFilter = function (req, file, cb) {
//   // accept image only
//   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       return cb(new Error('Only image files are allowed!'), false);
//   }
//   cb(null, true);
// };
import { Request, Response } from 'express';
import formidable, { Files } from 'formidable';
import IncomingForm from 'formidable/Formidable';

export const create = (req: Request, res: Response) => {
  let form: IncomingForm = new formidable.IncomingForm({
    uploadDir: __dirname + '../../../tmp',
    keepExtensions: true
  });
  // form.keepExtensions = true;
  form.parse(req, (err, fields, files: Files) => {
    if(err) {
      return res.status(400).json({"error": "Image could not be uploaded"});
    }
    // 1kb = 1000
    // 1mb = 1000000

    if(files.photo) {
      console.log('Files photo: ', files.photo);
      // if(files.photo.size > 1000000) {
      //   return resizeBy.status(400).json({"error": "image should be less than 1mb in size"})
      // }

      // save image in db
      // product.photo.data = fs.readFileSync(files.photo.path);
      // product.photo.contentType = fs.readFileSync(files.photo.type);
      return files.photo;
    }
  });



}