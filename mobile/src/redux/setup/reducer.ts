import { combineReducers } from "redux";
import postsReducer from "../posts/reducer";
import authReducer from "../auth/reducer";

const reducerCombination = combineReducers({
    postsReducer,
    authReducer,
});

export default reducerCombination;