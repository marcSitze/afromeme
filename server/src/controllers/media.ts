import { Request, Response } from 'express';
import fs from 'fs';
import { ErrorHandler, SuccessHandler } from '../common/response.handler';
import constants from '../common/constants';
import { createMedia as saveMedia } from '../common/upload';

const { httpStatus } = constants;

export const createMedia = async (req: any, res: any) => {

  console.log('req.media: ', req.file);
  if(req.file && req.file.size > 1024 * 1024) {
    fs.unlink(req.file.path, function(err) {
      if(err) throw err;
    });
    return ErrorHandler(res, httpStatus.BAD_REQUEST, "please upload an image or gif <= 1mo");
  }
  try {
    const result = await saveMedia({
      name: 'abcd',
      path: req.file.path,
      mimetype: req.file.mimetype
    }, '61828045c2470b1ac499542a');
    console.log('result: ', result);
    SuccessHandler(res, httpStatus.CREATED, result);
  } catch(err) {
    console.error(err);
  }


}
export const getMedia = async (req: Request, res: Response) => {

}
export const getMedias = async (req: Request, res: Response) => {}
export const updateMedia = async (req: Request, res: Response) => {}