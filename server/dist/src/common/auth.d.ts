import jwt from 'jsonwebtoken';
export declare const encryptPassword: (password: string) => Promise<string>;
export declare const verifyPassword: (password: string, passwordDB: string) => Promise<boolean>;
declare type Payload = {
    user: {
        id: string;
    };
};
export declare const generateToken: (payload: Payload) => Promise<string>;
export declare const verifyToken: (token: string) => Promise<string | jwt.JwtPayload>;
export {};
