import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { ErrorHandler, SuccessHandler } from '../common/response.handler';
import constants from '../common/constants';
import { createMedia as saveMedia } from '../common/upload';
import MediaService from '../services/media.service';

const { httpStatus } = constants;
const mediaService = new MediaService();

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
    }, '61828045c2470b1ac499542b');
    console.log('result: ', result);
    SuccessHandler(res, httpStatus.CREATED, result);
  } catch(err) {
    console.error(err);
  }


}
export const getMedia = async (req: any, res: Response) => {
  const media = await mediaService.getMediaById(req.params.id);
  if(media) {
  req.media = media;
  console.log('media', media);
  res.set('Content-Type', media.photo.contentType)
  res.send(media.photo.data);
  }
}

export const photo = (req: any, res: any, next: NextFunction) => {
  console.log('req.photo: ', req.photo);
  if(req.photo.photo.data) {
    res.set('Content-Type', req.photo.photo.contentType);
    res.send(req.photo.photo.data);
  }
  next();
}
export const getMedias = async (req: Request, res: Response) => {
  const medias = await mediaService.getMedias();
  res.send(medias);
}
export const updateMedia = async (req: Request, res: Response) => {}