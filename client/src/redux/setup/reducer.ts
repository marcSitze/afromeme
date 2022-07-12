import { combineReducers } from "redux";
import postsReducer from "../posts/reducer";
import authReducer from "../auth/reducer";
import usersReducer from '../users/reducer';

const reducerCombination = combineReducers({
    postsReducer,
    authReducer,
    usersReducer,
});

export default reducerCombination;