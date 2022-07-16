import { Request, Response } from 'express';
export declare const createComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getComment: (req: Request, res: Response) => void;
export declare const getComments: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateComment: (req: Request, res: Response) => void;
export declare const getCommentsByQuery: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
