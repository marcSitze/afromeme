import multer from 'multer';
export declare const upload: multer.Multer;
export declare const createMedia: (file: any, userId: string) => Promise<import("../interfaces/models/MediaDocument").MediaDocument | undefined>;
