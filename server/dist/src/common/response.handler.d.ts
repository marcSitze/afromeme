import express, { Response } from 'express';
export declare const SuccessHandler: (res: Response, statusCode: number, data: any) => express.Response<any, Record<string, any>>;
export declare const ErrorHandler: (res: Response, statusCode: number, data: any) => express.Response<any, Record<string, any>>;
