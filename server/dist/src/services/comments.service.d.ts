import { CreateCommentDTO } from "../dto/comment.dto";
import { ICommentsService } from "../interfaces/comments/comments.service.interface";
export default class CommentsService implements ICommentsService {
    constructor();
    createComment: (comment: CreateCommentDTO) => Promise<import("../interfaces/models/CommentDocument").CommentDocument>;
    getComments: () => Promise<import("../interfaces/models/CommentDocument").CommentDocument[]>;
    findOne: (query: Partial<CreateCommentDTO>) => Promise<import("../interfaces/models/CommentDocument").CommentDocument | null>;
    getCommentById: (id: string) => Promise<import("../interfaces/models/CommentDocument").CommentDocument | null>;
    updateComment: (id: string, query: Partial<CreateCommentDTO>) => Promise<import("../interfaces/models/CommentDocument").CommentDocument | null>;
    getCommentsByQuery: (query: any) => Promise<import("../interfaces/models/CommentDocument").CommentDocument[]>;
}
