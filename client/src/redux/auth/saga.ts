import { takeLatest, put, takeLeading } from 'redux-saga/effects';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from './types';
import * as typesUser from '../users/types';
// import * as RootNavigation from '../../navigations/RootNavigation';
import * as SCREENS from '../../constants/screens';
import { login as loginService } from '../../services/auth';
import { LoginDto } from '../../types/auth';
import config from '../../config';

/**
 * @description Login User
 */

type LoginType = {
  type: typeof types.LOGIN_USER_REQUEST;
  payload: LoginDto;
};

type ReturnType = {
  success: Boolean;
  data: any;
};

function* login({ payload }: LoginType): Generator<any> {
  console.log('payloadSaga: ', payload);
  try {
    const data: any = yield loginService(payload);
    console.log('dataLogin: ', data);
    yield put({ type: types.LOGIN_USER_SUCCESS, payload: data.data });
    // dispatch get User Account
    yield put({ type: typesUser.GET_USER_ACCOUNT_REQUEST, payload: data.data.token })
    /**
     * @todo: Save token data to localStorage
     */
    // yield AsyncStorage.setItem('@token', data?.data?.token)
    // RootNavigation.navigate(SCREENS.BOTTOM_NAVIGATION);
  } catch (error) {
    console.error('err: ', error);
  }
}

export default function* AuthSaga() {
  yield takeLatest(types.LOGIN_USER_REQUEST, login);
}
