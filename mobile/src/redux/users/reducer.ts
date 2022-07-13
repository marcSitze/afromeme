import * as types from './types';
import { LOGOUT_USER_SUCCESS } from '../auth/types';
import { Action } from '../../types';

const INITIAL_STATE = {
  account: {}
};

function UsersReducer(state = INITIAL_STATE, action: Action) {
  switch(action.type) {
    case types.GET_USER_ACCOUNT_REQUEST:
      return {
        ...state
      }
    case types.GET_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload
      }
    case types.GET_LOCAL_USER_ACCOUNT_REQUEST:
      console.log('action: ', action)
      return {
        ...state,
      }
    case types.GET_LOCAL_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload,
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        action: {}
      }
    default:
      return state;
  }
}

export default UsersReducer;