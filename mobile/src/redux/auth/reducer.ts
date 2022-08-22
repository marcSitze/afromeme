import * as types from './types';
import { IAuthState } from '../../types/auth';
import { Action } from '../../types'

const INITIALSTATE: IAuthState = {
  account: {
    _id: '',
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
  loading_forgetPass: false,
  forgetPassword_msg: '',
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

    case types.FORGET_PASSWORD_REQUEST:
      return {
        ...state,
        loading_forgetPass: true,
      }
      case types.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading_forgetPass: false,
        forgetPassword_msg: 'Check your mail box and reset your password'
      }
      case types.FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        loading_forgetPass: false,
        forgetPassword_msg: action.payload
      }
    default: {
      return {
        ...state
      }
    }
  }
};

export default authReducer;