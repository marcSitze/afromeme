import { put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createComment as createCommentService, getComments as getCommentService } from '../../services/comments';
import * as types from './types';
import { CommentDto } from '../../types/comments'

type CreateCommentType = {
  type: typeof types.CREATE_COMMENT_REQUEST;
  payload: CommentDto;
};

function* createComment({ payload }: CreateCommentType ): Generator<any>{

  try {
    const token: any = yield AsyncStorage.getItem('@token');
    const data: any = yield createCommentService(token, payload);
    if(data.success) {
      yield put({ type: types.CREATE_COMMENT_SUCCESS, payload: {msg: "comment create success..."}});
      yield put({ type: types.GET_COMMENTS_REQUEST, payload: payload.post})
    }
    if(!data.success) {
      yield put({ type: types.CREATE_COMMENT_SUCCESS, payload: {msg: "comment create failure..."}})
    }
  } catch (error) {
    console.error('CreateCommentERR: ', error);
  }
}

type GetCommentsType = {
  type: typeof types.GET_COMMENTS_REQUEST;
  payload: string;
};


function* getComments({ payload }: GetCommentsType): Generator<any> {
  try {
    const token: any = yield AsyncStorage.getItem('@token');
    const data: any = yield getCommentService(token, payload);
    yield(3000)
    if(data.success) {
      yield put({ type: types.GET_COMMENTS_SUCCESS, payload: {comments: data.data, msg: "get comments success..."}})
    }
    if(!data.success) {
      yield put({ type: types.GET_COMMENTS_FAILURE, payload: {msg: "get comments failure..."}})
    }
  } catch (err) {
    console.error('GetCommentsErrSaga: ', err);
  }
}

export default function* CommentsSaga(){
  yield takeLatest(types.CREATE_COMMENT_REQUEST, createComment)
  yield takeLatest(types.GET_COMMENTS_REQUEST, getComments)
}