import {watcherPeopleSaga} from "./peopleSaga";
import {put, all, spawn} from "redux-saga/effects";
import {LOAD_USERS} from "../reducers/peopleReducer";

export default function* rootSaga(){
    const sagas = [watcherPeopleSaga];
    yield all(sagas.map(s => spawn(s)))
}