import { combineReducers } from "redux";
import postsReducer from "../posts/reducer";
import authReducer from "../auth/reducer";
import usersReducer from '../users/reducer'
import commentsReducer from "../comments/reducer";

const reducerCombination = combineReducers({
    postsReducer,
    authReducer,
    usersReducer,
    commentsReducer,
});

export default reducerCombination;