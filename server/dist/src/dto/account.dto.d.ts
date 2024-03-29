interface IBio {
    youtube: string;
    twitter: string;
    facebook: string;
    instagram: string;
}
export declare type AccountDTO = {
    _id?: string;
    user: string;
    posts: string[];
    location?: string;
    followers?: string[];
    bio?: IBio;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};
export {};
