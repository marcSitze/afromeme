import {delay, put, takeLatest, takeLeading} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import toast from 'react-native-toast-notifications';
import * as types from './types';
import * as typesUser from '../users/types';
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
    yield put({type: types.GET_POSTS_SUCCESS, payload: result.data});
  } catch (error) {
    console.error('SomeS err: ', error);
  }
}

type PostType = {
  author: string;
  description: string;
  photo: any;
};
type CreatePostType = {
  type: typeof types.CREATE_POST_REQUEST;
  payload: PostType;
};

function* createPost({payload}: CreatePostType): Generator<any> {
  try {
    // console.log('payloadSAGA: ', payload);
    const token: any = yield AsyncStorage.getItem('@token');
    const account: any = yield AsyncStorage.getItem('@token');
    const data: any = yield createPostService(token, payload);
    if (data.success) {
      yield put({type: types.CREATE_POST_SUCCESS, payload: 'post published'});
      // toast.show('Post published');
      yield put({type: types.GET_POSTS_REQUEST, payload: []});
      yield put({ type: typesUser.GET_USER_ACCOUNT_REQUEST })
      RootNavigationRef.goBack();
    }

    if (!data.success) {
      // toast.show('unable to publish post');
      yield put({
        type: types.CREATE_POST_FAILURE,
        payload: 'unable to publish post',
      });
    }
  } catch (err) {
    console.error('CreatePostSaga: ', err);
  }
}

type LikeType = {
  post: string;
};
type LikePostType = {
  type: typeof types.LIKE_POST_REQUEST;
  payload: LikeType;
};

function* likePost({payload}: LikePostType): Generator<any> {
  try {
    const token: any = yield AsyncStorage.getItem('@token');
    const data: any = yield likePostService(token, payload);
    if (data.success) {
      yield put({
        type: types.LIKE_POST_SUCCESS,
        payload: {msg: 'like updated', post: data.data.post},
      });
    }
    if (!data.success) {
      yield put({
        type: types.LIKE_POST_FAILURE,
        payload: 'unable to update like',
      });
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
