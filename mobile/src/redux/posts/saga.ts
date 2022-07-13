import {put, takeLatest, takeLeading} from 'redux-saga/effects';
import * as types from './types';
import {
  getPosts as getPostsService,
  createPost as createPostService,
} from '../../services/posts';
import * as RootNavigationRef from '../../navigations/RootNavigation';
import * as SCREENS from '../../constants/screens';

/**
 * @description Get Posts
 */
function* getPosts(): Generator<any> {
  try {
    const result: any = yield getPostsService();
    console.log('dataS: ', result);
    yield put({type: types.GET_POSTS_SUCCESS, payload: result.data});
  } catch (error) {
    console.error('SomeS err: ', error);
  }
}

type PostType = {
  author: string;
  description: string;
  photo: any;
}
type CreatePostType = {
  type: typeof types.CREATE_POST_REQUEST;
  payload: PostType;
};

function* createPost({payload}: CreatePostType): Generator<any> {
  try {
    // console.log('payloadSAGA: ', payload);
    const data: any = yield createPostService(payload);
    // console.log('dAtaSaga: ', data);
   yield put({ type: types.GET_POSTS_REQUEST, payload: []})
    // RootNavigationRef.goBack()
  } catch (err) {
    console.error('CreatePostSaga: ', err);
  }
}

export default function* PostsSaga() {
  yield takeLeading(types.GET_POSTS_REQUEST, getPosts);
  yield takeLeading(types.CREATE_POST_REQUEST, createPost);
}
