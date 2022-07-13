import * as types from './types';
import { LoginDto, RegisterDto } from '../../types/auth';

export const login = (payload: LoginDto) => ({
  type: types.LOGIN_USER_REQUEST,
  payload
});

export const getLocalSignIn = () => ({
  type: types.GET_LOCAL_SIGN_IN_REQUEST
});

export const register = (payload: RegisterDto) => ({
  type: types.REGISTER_USER_REQUEST,
  payload
});

export const logout = () => ({
  type: types.LOGOUT_USER_REQUEST
})