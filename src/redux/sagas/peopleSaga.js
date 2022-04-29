import {call, put, takeEvery} from "redux-saga/effects"
import {LOAD_USERS, LOAD_USERS_FINISHED} from "../reducers/peopleReducer";
// запрос на людей свапи
function* loadPeoples({payload}){
    const {page, search} = payload;
    const req = yield call(
        fetch,
        `https://swapi.dev/api/people?page=${page}&search=${search}`
    )
    const data = yield call([req, req.json]);
    yield put({
        type: LOAD_USERS_FINISHED,
        payload: data,
    })
}

function* loadPeopleDetails(){

}
// вотчер за людьми
export function* watcherPeopleSaga(){
    yield takeEvery(LOAD_USERS, loadPeoples)
}