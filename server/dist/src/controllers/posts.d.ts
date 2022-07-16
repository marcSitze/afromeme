import { Request, Response } from 'express';
export declare const createPost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getPost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getPosts: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePost: (req: any, res: Response) => Promise<void>;
export declare const likePost: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
