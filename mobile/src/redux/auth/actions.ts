import * as types from './types';
import { LoginDto, RegisterDto } from '../../types/auth';

export const login = (payload: LoginDto) => ({
  type: types.LOGIN_USER_REQUEST,
  payload
});

export const register = (payload: RegisterDto) => ({
  type: types.REGISTER_USER_REQUEST,
  payload
})