import {put, takeLatest, takeLeading} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from './types';
import {
  getPosts as getPostsService,
  createPost as createPostService,
  likePost as likePostService,
} from '../../services/posts';
import * as RootNavigationRef from '../../navigations/RootNavigation';
import * as SCREENS from '../../constants/screens';

/**
 * @description Get Posts
 */
function* getPosts(): Generator<any> {
  try {
    const token: any = yield AsyncStorage.getItem('@token');
    const result: any = yield getPostsService(token);
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
    const token: any = yield AsyncStorage.getItem('@token');
    const data: any = yield createPostService(token, payload);
    // console.log('dAtaSaga: ', data);
   yield put({ type: types.GET_POSTS_REQUEST, payload: []})
    // RootNavigationRef.goBack()
  } catch (err) {
    console.error('CreatePostSaga: ', err);
  }
}

type LikeType = {
  post: string
}
type LikePostType = {
  type: typeof types.LIKE_POST_REQUEST;
  payload: LikeType;
};

function* likePost({ payload }: LikePostType): Generator<any> {
  console.log('payloadSaga: ', payload)
  try {
    const token: any = yield AsyncStorage.getItem('@token');
    const data: any = yield likePostService(token, payload);
    console.log('dataSL: ', data);
    if(data.success) {
      yield put({ type: types.LIKE_POST_SUCCESS, payload: 'like updated'});
    }
    if(!data.success) {
      yield put({ type: types.LIKE_POST_FAILURE, payload: 'unable to update like'});
    }
  } catch (error) {
    console.error('LikePostErr: ', error);
  }
}

export default function* PostsSaga() {
  yield takeLeading(types.GET_POSTS_REQUEST, getPosts);
  yield takeLeading(types.CREATE_POST_REQUEST, createPost);
  yield takeLeading(types.LIKE_POST_REQUEST, likePost);
}
