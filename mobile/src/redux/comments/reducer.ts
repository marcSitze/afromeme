import * as types from './types';
import {Action} from '../../types';
import {ICommentState} from '../../types/comments';
import {IAccount} from '../../types/users';

const INITIAL_STATE: ICommentState = {
  comment: {
    _id: '',
    author: {
      _id: '',
      followers: [],
      posts: [],
      user: {},
    },
    message: '',
    post: {
      _id: '',
      author: {
        _id: '',
        lastName: '',
        username: '',
        firstName: '',
      },
      comments: [],
      likes: [],
      media: '',
    },
    createAt: new Date(),
    updatedAt: new Date(),
  },
  comments: [],
  creating_comment: false,
  creating_msg: '',
  loading_comments: false,
  loading_msg: '',
};

const CommentsReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        creating_comment: true,
      };
    case types.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        creating_comment: false,
      };
    case types.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        creating_comment: false,
      };

    case types.GET_COMMENTS_REQUEST:
      return {
        ...state,
        loading_comments: true,
        loading_msg: 'loading',
      };
    case types.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading_comments: false,
        loading_msg: 'success',
        comments: action.payload.comments
      };
    case types.GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading_comments: false,
        loading_msg: 'failure',
      };
    case types.CLEAR_COMMENTS:
      return {
        ...state,
        comments: []
      }
    default:
      return {
        ...state,
      };
  }
};

export default CommentsReducer;
