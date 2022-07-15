import * as types from './types';
import { CommentDto } from '../../types/comments';

export const createComment = (payload: CommentDto) => ({
  type: types.CREATE_COMMENT_REQUEST,
  payload,
});

export const getComments = (payload: string) => ({
  type: types.GET_COMMENTS_REQUEST,
  payload
});

export const clearComments = () => ({
  type: types.CLEAR_COMMENTS
})