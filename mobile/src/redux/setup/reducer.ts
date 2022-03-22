import { combineReducers } from "redux";
import postsReducer from "../posts/reducer";

const reducerCombination = combineReducers({
    postsReducer,
});

export default reducerCombination;