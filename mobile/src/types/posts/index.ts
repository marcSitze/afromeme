import {IUser, IAccount} from '../users';
export interface IPost {
  _id: string;
  message?: string;
  media: {
    photo: {
      contentType: string;
    };
    path: string;
    _id: string;
  };
  link: string;
  tags: string;
  author: IAccount;
  likes: Array<any>; // todo add like data type
  comments: Array<any>; // todo add comment data type
  createdAt: string;
}

export interface IPostState {
  posts: Array<IPost>;
  loading: Boolean;
  error: string | void;
  creating: Boolean;
  creating_msg: string | void;
  liking: Boolean;
  liking_msg: string;
}
