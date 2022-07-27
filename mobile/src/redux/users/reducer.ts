import * as types from './types';
import {LOGOUT_USER_SUCCESS} from '../auth/types';
import {Action} from '../../types';
import {IUserState, IAccount} from '../../types/users';

const INITIAL_STATE: IUserState = {
  account: {
    _id: '',
    followers: [],
    posts: [],
    user: {},
  },
  view_profile: {
    _id: '',
    followers: [],
    posts: [],
    user: {},
  },
  view_profile_loading: false,
  view_profile_msg: '',
  error: '',
  user: {_id: '', lastName: '', username: '', firstName: ''},
  accounts: [],
};

function UsersReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case types.GET_USER_ACCOUNT_REQUEST:
      return {
        ...state,
      };
    case types.GET_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload,
      };
    case types.GET_LOCAL_USER_ACCOUNT_REQUEST:
      console.log('action: ', action);
      return {
        ...state,
      };
    case types.GET_LOCAL_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        action: {},
      };

    case types.VIEW_PROFILE_REQUEST:
      return {
        ...state,
        view_profile_loading: true,
        view_profile_msg: '',
      };
    case types.VIEW_PROFILE_SUCCESS:
      return {
        ...state,
        view_profile_loading: false,
        view_profile_msg: 'success',
        view_profile: action.payload,
      };
    case types.VIEW_PROFILE_FAILURE:
      return {
        ...state,
        view_profile_loading: false,
        view_profile_msg: 'failure',
      };
    case types.CLEAR_VIEW_PROFILE:
      return {
        ...state,
        view_profile: {},
        view_profile_loading: true,
        view_profile_msg: '',
      }

    case types.GET_USERS_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accounts: action.payload
      }

    default:
      return state;
  }
}

export default UsersReducer;
