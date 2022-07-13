import {takeLatest, put, takeLeading, delay} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from './types';
import * as typesUser from '../users/types';
import * as RootNavigation from '../../navigations/RootNavigation';
import * as SCREENS from '../../constants/screens';
import {
  login as loginService,
  logoutUser as logoutUserService,
  register as registerService,
} from '../../services/auth';
import {LoginDto, RegisterDto} from '../../types/auth';
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

function* login({payload}: LoginType): Generator<any> {
  console.log('payloadSaga: ', payload);
  try {
    const data: any = yield loginService(payload);
    console.log('dataLogin: ', data);
    yield delay(1000)
    if(!data.success) {
      yield put({ type: types.LOGIN_USER_FAILURE, payload: data.data})
      return;
    }
    yield put({type: types.LOGIN_USER_SUCCESS, payload: data.data});
    // dispatch get User Account
    yield put({
      type: typesUser.GET_USER_ACCOUNT_REQUEST,
      payload: data.data.token,
    });
    /**
     * @todo: Save token data to localStorage
     */
    yield AsyncStorage.setItem('@token', data?.data?.token);
    RootNavigation.navigate(SCREENS.BOTTOM_NAVIGATION);
  } catch (error) {
    console.error('err: ', error);
  }
}

function* localSignIn(): Generator<any> {
  try {
    const data: any = yield AsyncStorage.getItem('@user');
    // const account: any = yield AsyncStorage.getItem("@account");
    console.log('LocalUsertype: ', typeof data);
    console.log('LocalUser: ', JSON.parse(data));
    if (data === null || data === '') {
      return RootNavigation.navigate(SCREENS.LOGIN);
    }
    if (data && data.length > 0) {
      yield put({
        type: types.GET_LOCAL_SIGN_IN_SUCCESS,
        payload: JSON.parse(data),
      });
      yield put({
        type: typesUser.GET_LOCAL_USER_ACCOUNT_REQUEST,
        payload: JSON.parse(data).token,
      });
      yield delay(1000);
      RootNavigation.navigate(SCREENS.BOTTOM_NAVIGATION);
    }
  } catch (err) {
    console.error('err: ', err);
  }
}

function* logout(): Generator<any> {
  try {
    const data: boolean = logoutUserService();
    if (data) {
      yield AsyncStorage.removeItem('@token');
      yield AsyncStorage.removeItem('@user');
      yield AsyncStorage.removeItem('@account');
      yield put({type: types.LOGOUT_USER_SUCCESS, payload: []});
      RootNavigation.navigate(SCREENS.LOGIN);
    }
  } catch (error) {
    console.error('LoggingOut error: ', error);
  }
}

type RegisterType = {
  type: typeof types.REGISTER_USER_REQUEST;
  payload: RegisterDto;
};

function* register({ payload }: RegisterType): Generator<any> {
  try {
    const result: any = yield registerService(payload);
    if(result.success) {
      yield put({ type: types.REGISTER_USER_SUCCESS, payload: []})
      yield delay(1000);
      RootNavigation.navigate(SCREENS.LOGIN)
    }
    if(!result.success) {
      yield put({ type: types.REGISTER_USER_FAILURE, payload: result.data})
    }
  } catch (error) {
    yield put({ type: types.REGISTER_USER_FAILURE, payload: []})
    console.error('Register saga: ', error);
  }
}

export default function* AuthSaga() {
  yield takeLatest(types.LOGIN_USER_REQUEST, login);
  yield takeLatest(types.GET_LOCAL_SIGN_IN_REQUEST, localSignIn);
  yield takeLatest(types.LOGOUT_USER_REQUEST, logout);
  yield takeLatest(types.REGISTER_USER_REQUEST, register);
}
