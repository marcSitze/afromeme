import { Request, Response } from "express";
export declare const getAccount: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateAccount: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAccounts: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAccountsByQuery: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
