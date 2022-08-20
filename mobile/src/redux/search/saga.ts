import { takeLeading, put } from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as types from './types';
import { searchByTerm as searchByTermService } from "../../services/search";

function* searchByTerm({payload}: any): Generator<any> {

  try {
    const token: any = yield AsyncStorage.getItem('@token');
    const data: any = yield searchByTermService(token, payload);
    console.log('SearchData: ', data);

    if(data.success) {
      yield put({ type: types.SEARCH_TERM_SUCCESS, payload: data.data })
    }
  } catch (err) {
    console.error('SearchByTermSaga: ', err);
  }

}

export default function* SearchSaga() {
  yield takeLeading(types.SEARCH_TERM_REQUEST, searchByTerm)
}