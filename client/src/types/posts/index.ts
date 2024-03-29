import {IUser} from '../users';
export interface IPost {
  id: string;
  message?: string;
  media: string;
  author: IUser;
  likes: Array<any>; // todo add like data type
  comments: Array<any>; // todo add comment data type
}

export interface IPostState {
  posts: Array<IPost>;
  loading: Boolean;
  error: string | void;
  creating: Boolean;
  creatingError: string | void;
}
