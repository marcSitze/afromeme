import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE
} from './types';
import { IPostState } from '../../types/posts';
import { Action } from '../../types';


const intialState: IPostState = {
  posts: [],
  loading: false,
  error: '',
  creating: false,
  creatingError: '',
  liking: false,
  liking_msg: ''
}

function postsReducer(state = intialState, action: Action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...action.payload]
      }
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CREATE_POST_REQUEST:
      return {
        ...state,
        creating: true,
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        creating: false,
    }
    case CREATE_POST_FAILURE:
      return {
        ...state,
        creating: false,
        creatingError: action.payload
    }

    case LIKE_POST_REQUEST:
      return {
        ...state,
        liking: true,
      }
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        liking: false,
        liking_msg: 'success',
      }
    case LIKE_POST_FAILURE:
      return {
        ...state,
        liking: false,
        liking_msg: 'failure'
      }
    default:
    return {
      ...state
    }
  }
}

export default postsReducer;