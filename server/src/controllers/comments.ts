import { Request, Response } from 'express';
import { SuccessHandler, ErrorHandler } from '../common/response.handler';
import CommentService from '../services/comments.service';
import constants from '../common/constants';

const { httpStatus } = constants;

export const createComment = (req: Request, res: Response) => {}
export const getComment = (req: Request, res: Response) => {}
export const getComments = (req: Request, res: Response) => {}
export const updateComment = (req: Request, res: Response) => {}