import {combineReducers} from "redux";
import peopleReducer from "./peopleReducer";

function rootReducer(state = {}, action){
    return state;
}

const reducers = combineReducers({
    people: peopleReducer,
    root: rootReducer,
})
export default reducers;

