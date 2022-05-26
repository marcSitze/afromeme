import * as types from './types';
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
    default:
      return state;
  }
}

export default UsersReducer;