import * as types from './types';

export const getUserAccount = (userId: string) => ({
  type: types.GET_USER_ACCOUNT_REQUEST,
  userId,
});

export const getLocalUserAccount = (userId: string) => ({
  type: types.GET_LOCAL_USER_ACCOUNT_REQUEST,
  userId,
});

export const viewProfile = (accountId: string) => ({
  type: types.VIEW_PROFILE_REQUEST,
  payload: accountId,
});

export const clearViewProfile = () => ({
  type: types.CLEAR_VIEW_PROFILE
})

export const getUsersAccounts = () => ({
  type: types.GET_USERS_ACCOUNTS_REQUEST
})