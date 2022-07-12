import {GET_POSTS_REQUEST, CREATE_POST_REQUEST} from './types';

export const getPosts = () => ({
  type: GET_POSTS_REQUEST,
});

export const createPost = (payload: any) => ({
  type: CREATE_POST_REQUEST,
  payload,
});
