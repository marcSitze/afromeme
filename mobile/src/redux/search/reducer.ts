import * as types from './types';
import {Action} from '../../types';
import {ISearchState} from '../../types/search';

const INITIAL_STATE: ISearchState = {
  searching: false,
  searchData: {posts: [], users: []},
};

export default function SearchReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case types.SEARCH_TERM_REQUEST:
      return {
        ...state,
        searching: true,
      };
    case types.SEARCH_TERM_SUCCESS:
      return {
        ...state,
        searching: false,
        searchData: {
          users: action.payload.users,
          posts: action.payload.posts,
        },
      };
    default:
      return state;
  }
}
