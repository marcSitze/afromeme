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
    if(!data?.success) {
      RootNavigation.navigate(SCREENS.LOGIN);
      return;
    }
    if(data?.success) {
      yield put({ type: types.GET_USER_ACCOUNT_SUCCESS, payload: data?.data})
      // save user account information to the local storage
      yield AsyncStorage.setItem('@account', JSON.stringify(data.data));
      yield AsyncStorage.setItem('@user', JSON.stringify(data?.data?.user));
    }
    return data;
  } catch (error) {
    console.error('GetUserAccountErr: ', error);
  }
}

function* getLocalUserAccount({ payload }: any): Generator<any> {
  try{
    const data: any = yield AsyncStorage.getItem("@account");
    console.log('LocalUsertype: ', typeof data)
    console.log('LocalUserAcc: ', JSON.parse(data))
    if(data.length === 0 || data === null || data === '') {
    //  return RootNavigation.navigate(SCREENS.LOGIN);
    yield put({ type: types.GET_USER_ACCOUNT_REQUEST, payload })
    }
    if(data && data.length > 0) {
      yield put({ type: types.GET_LOCAL_USER_ACCOUNT_SUCCESS, payload: JSON.parse(data)})
      yield (1000);
      // RootNavigation.navigate(SCREENS.BOTTOM_NAVIGATION);
    }
  }catch(err) {
    console.error('getLocalUserAccount: ', err);
  }
}

export default function* AuthSaga() {
  yield takeLatest(types.GET_USER_ACCOUNT_REQUEST, getUserAccount);
  yield takeLatest(types.GET_LOCAL_USER_ACCOUNT_REQUEST, getLocalUserAccount);
}
