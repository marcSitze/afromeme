export default interface IMedia {
    _id?: string;
    name: string;
    author: string;
    path: string;
    description: string;
    post: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}