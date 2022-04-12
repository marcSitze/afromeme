import { put, takeLatest, takeLeading } from 'redux-saga/effects';
import * as types from './types';
import { getPosts as getPostsService } from '../../services/posts';

/**
 * @description Get Posts
 */
function* getPosts(): Generator<any> {
  try {
    const result: any = yield getPostsService();
    const data: any = yield result.json();
    console.log('dataS: ', data);
    yield put({ type: types.GET_POSTS_SUCCESS, payload: data.data })
  } catch (error) {
    console.error('SomeS err: ', error);
  }
}

export default function* PostsSaga() {
  yield takeLeading(types.GET_POSTS_REQUEST, getPosts);
}