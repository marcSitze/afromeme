import { Response, NextFunction } from 'express';
export declare function isLoggedIn(req: any, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
