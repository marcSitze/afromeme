import { IPostsService } from "../interfaces/posts/post.service.interface";
import { CreatePostDTO } from "../dto/post.dto";
export default class PostsService implements IPostsService {
    constructor();
    createPost: (post: CreatePostDTO) => Promise<import("../interfaces/models/PostDocument").PostDocument>;
    getPosts: () => Promise<import("../interfaces/models/PostDocument").PostDocument[]>;
    findOne: (query: Partial<CreatePostDTO>) => Promise<import("../interfaces/models/PostDocument").PostDocument | null>;
    getPostById: (id: string) => Promise<import("../interfaces/models/PostDocument").PostDocument | null>;
    updatePost: (id: string, query: any) => Promise<import("../interfaces/models/PostDocument").PostDocument | null>;
}
