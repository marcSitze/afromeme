import { all } from 'redux-saga/effects';
import PostsSaga from '../posts/saga';
import AuthSaga from '../auth/saga';
import UsersSaga from '../users/saga';

/**
 * @description combine sagas
 */

export default function* Sagas() {
  yield all([PostsSaga(), AuthSaga(), UsersSaga()]);
}