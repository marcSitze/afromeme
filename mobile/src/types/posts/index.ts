import {IUser, IAccount} from '../users';
export interface IPost {
  _id: string;
  message?: string;
  media: string;
  author: IAccount;
  likes: Array<any>; // todo add like data type
  comments: Array<any>; // todo add comment data type
}

export interface IPostState {
  posts: Array<IPost>;
  loading: Boolean;
  error: string | void;
  creating: Boolean;
  creatingError: string | void;
  liking: Boolean;
  liking_msg: string;
}
