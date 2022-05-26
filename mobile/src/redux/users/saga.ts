import { takeLatest, put, takeLeading } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from './types';
import * as RootNavigation from '../../navigations/RootNavigation';
import * as SCREENS from '../../constants/screens';
import { getUserAccount as getUserAccountService } from '../../services/users';
import { LoginDto } from '../../types/auth';
import config from '../../config';

/**
 * @description Get User Account
 */

type ReturnType = {
  success: Boolean;
  data: any;
};

function* getUserAccount({ payload }: any): Generator<any> {
  console.log('payloadSaga: ', payload);
  try {
    const data: any = yield getUserAccountService(payload);
    // console.log('dataS: ', data);
    yield put({ type: types.GET_USER_ACCOUNT_SUCCESS, payload: data?.data})
    // save user account information to the local storage
    yield AsyncStorage.setItem('@account', JSON.stringify(data.data));
    yield AsyncStorage.setItem('@user', JSON.stringify(data?.data?.user));
    return data;
  } catch (error) {
    console.error('err: ', error);
  }
}

export default function* AuthSaga() {
  yield takeLatest(types.GET_USER_ACCOUNT_REQUEST, getUserAccount);
}
