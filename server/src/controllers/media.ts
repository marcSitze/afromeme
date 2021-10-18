import { Request, Response } from 'express';
import { create } from '../common/upload';
export const createMedia = async (req: Request, res: Response) => {
  const result =  create(req, res);
  res.send(result);
}
export const getMedia = async (req: Request, res: Response) => {

}
export const getMedias = async (req: Request, res: Response) => {}
export const updateMedia = async (req: Request, res: Response) => {}