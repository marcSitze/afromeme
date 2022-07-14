import * as types from './types';

export const getPosts = () => ({
  type: types.GET_POSTS_REQUEST,
});

export const createPost = (payload: any) => ({
  type: types.CREATE_POST_REQUEST,
  payload,
});

export const likePost = (payload: any) => ({
  type: types.LIKE_POST_REQUEST,
  payload
})