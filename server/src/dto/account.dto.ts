interface IBio {
    youtube: string;
    twitter: string;
    facebook: string;
    instagram: string;
}
export class AccountDTO {
    _id?: string;
    user: string;
    location?: string;
    followers?: string[];
    bio?: IBio;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}