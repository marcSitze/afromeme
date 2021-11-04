import IPost from './post.interface';
import { CreatePostDTO } from '../../dto/post.dto';

export interface IPostsService{
    createPost(user: CreatePostDTO): Promise<IPost | void>;
    getPosts(): Promise<IPost[] | void>;
    findOne(query: any): Promise<IPost | void | any>;
    getPostById(id: string): Promise<IPost | void | any>;
}