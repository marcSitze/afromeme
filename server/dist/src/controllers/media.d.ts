import { Request, Response, NextFunction } from 'express';
export declare const createMedia: (req: any, res: any) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMedia: (req: any, res: Response) => Promise<void>;
export declare const photo: (req: any, res: any, next: NextFunction) => void;
export declare const getMedias: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateMedia: (req: Request, res: Response) => Promise<void>;
