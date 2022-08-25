import * as types from './types';

export const searchByTerm = (term: string) => ({
  type: types.SEARCH_TERM_REQUEST,
  payload: term,
})