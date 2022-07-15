import {takeLatest, put, takeLeading} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from './types';
import * as RootNavigation from '../../navigations/RootNavigation';
import * as SCREENS from '../../constants/screens';
import {
  getUserAccount as getUserAccountService,
  viewProfile as viewProfileService,
} from '../../services/users';
import {LoginDto} from '../../types/auth';
import config from '../../config';

/**
 * @description Get User Account
 */

type ReturnType = {
  success: Boolean;
  data: any;
};

function* getUserAccount({payload}: any): Generator<any> {
  console.log('payloadSagaGetUserAccount: ', payload);
  try {
    const token: any = yield AsyncStorage.getItem('@token');
    const data: any = yield getUserAccountService(token, payload);
    // console.log('dataS: ', data);
    if (!data?.success) {
      RootNavigation.navigate(SCREENS.LOGIN);
      return;
    }
    if (data?.success) {
      console.log('Get Current user success...')
      yield put({type: types.GET_USER_ACCOUNT_SUCCESS, payload: data?.data});
      // save user account information to the local storage
      yield AsyncStorage.setItem('@account', JSON.stringify(data.data));
      yield AsyncStorage.setItem('@user', JSON.stringify(data?.data?.user));
      RootNavigation.navigate(SCREENS.BOTTOM_NAVIGATION);
    }
    return data;
  } catch (error) {
    console.error('GetUserAccountErr: ', error);
  }
}

function* getLocalUserAccount({payload}: any): Generator<any> {
  try {
    const data: any = yield AsyncStorage.getItem('@account');
    console.log('LocalUsertype: ', typeof data);
    console.log('LocalUserAcc: ', JSON.parse(data));
    if (data.length === 0 || data === null || data === '') {
      //  return RootNavigation.navigate(SCREENS.LOGIN);
      yield put({type: types.GET_USER_ACCOUNT_REQUEST, payload});
    }
    if (data && data.length > 0) {
      yield put({
        type: types.GET_LOCAL_USER_ACCOUNT_SUCCESS,
        payload: JSON.parse(data),
      });
      yield (1000);
      // RootNavigation.navigate(SCREENS.BOTTOM_NAVIGATION);
    }
  } catch (err) {
    console.error('getLocalUserAccount: ', err);
  }
}

type ViewProfileType = {
  type: typeof types.VIEW_PROFILE_REQUEST;
  payload: string;
}

function* viewProfile({payload}: ViewProfileType): Generator<any> {
  console.log('payloadSaga: ', payload);
  try {
    const token: any = yield AsyncStorage.getItem('@token');
    const data: any = yield viewProfileService(token, payload);
    // console.log('dataS: ', data);
    if (data?.success) {
      yield put({ type: types.VIEW_PROFILE_SUCCESS, payload: data.data[0]})
    }
    if (!data?.success) {
      yield put({type: types.VIEW_PROFILE_FAILURE, payload: data?.data});
    }
    return data;
  } catch (error) {
    console.error('ViewProfileErr: ', error);
  }
}


export default function* AuthSaga() {
  yield takeLatest(types.GET_USER_ACCOUNT_REQUEST, getUserAccount);
  yield takeLatest(types.GET_LOCAL_USER_ACCOUNT_REQUEST, getLocalUserAccount);
  yield takeLatest(types.VIEW_PROFILE_REQUEST, viewProfile);
}
