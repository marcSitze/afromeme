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
  registering_message: '',
  error: '',
  token: '',
}


function authReducer(state = INITIALSTATE, action: Action) {
  switch(action.type) {
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        logging: true,
        logging_error: ''
      }
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        logging: false,
        logging_error: ''
      }
    case types.LOGIN_USER_FAILURE:
    return {
      ...state,
      logging: false,
      logging_error: action.payload,
    }

    case types.LOGOUT_USER_REQUEST:
      return {
        ...state
      }
    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        account: {},
        user: {}
      }

    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        registering: true,
        message: '',
      }
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        registering: false,
        registering_message: 'Account Created Successfully...'
      }
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        registering: false,
        registering_message: action.payload
      }

    default: {
      return {
        ...state
      }
    }
  }
};

export default authReducer;