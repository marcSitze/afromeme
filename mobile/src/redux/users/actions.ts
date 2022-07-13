import * as types from './types';

export const getUserAccount = (userId: string) => ({
  type: types.GET_USER_ACCOUNT_REQUEST,
  userId,
});

export const getLocalUserAccount = (userId: string) => ({
  type: types.GET_LOCAL_USER_ACCOUNT_REQUEST,
  userId,
});