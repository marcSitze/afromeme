import { IAccount } from "../users";
import { IPost } from "../posts";

export type CommentDto = {
  author: string;
  message: string;
  post: string;
  createAt?: Date;
  updatedAt?: Date;
}

export interface IComment {
  _id: string;
  author: IAccount;
  message: string;
  post: IPost;
  createAt: Date;
  updatedAt: Date;
}

export interface ICommentState {
  comment: IComment;
  comments: IComment[];
  creating_comment: boolean;
  creating_msg: string;
  loading_comments: boolean;
  loading_msg: string;
}