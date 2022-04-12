import { takeLatest, put, takeLeading } from 'redux-saga/effects';
import * as types from './types';
import { login as loginService } from '../../services/auth';
import { LoginDto } from '../../types/auth';

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
    yield put({ type: types.LOGIN_USER_SUCCESS, payload: data.data })
  } catch (error) {
    console.error('err: ', error);
  }
}

export default function* AuthSaga() {
  takeLeading(types.LOGIN_USER_REQUEST, login);
}