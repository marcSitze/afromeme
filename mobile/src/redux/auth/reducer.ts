import * as types from './types';
import { IAuthState } from '../../types/auth';
import { Action } from '../../types'

const INITIALSTATE: IAuthState = {
  account: {
    user: ''
  },
  user: {
    _id: '',
    firstName: '',
    lastName: ''
  },
  logging: false,
  logging_error: '',
  registering: false,
  registering_error: '',
  error: '',
  token: '',
}


function AuthReducer(state = INITIALSTATE, action: Action) {
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        logging: false,
      }
    case types.LOGIN_USER_FAILURE:
    return {
      ...state,
      token: action.payload,
      logging: false,
      logging_error: action.payload,
    }
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        registering: false,
      }

    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        registering: false,
        registering_error: action.payload,
      }
    default: {
      return {
        ...state
      }
    }
  }
};

export default AuthReducer;