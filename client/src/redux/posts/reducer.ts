import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from './types';
import { IPostState } from '../../types/posts';
import { Action } from '../../types';


const intialState: IPostState = {
  posts: [{author: {_id: '1', lastName: 'marc', username: 're'}, comments: [], id: '1', likes: [], media: 'fsdf', message: 'ras'}],
  loading: false,
  error: '',
  creating: false,
  creatingError: '',
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
    default:
    return {
      ...state
    }
  }
}

export default postsReducer;