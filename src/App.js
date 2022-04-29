import {put} from "redux-saga/effects";
import {LOAD_USERS} from "./redux/reducers/peopleReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import PeopleTable from "./components/peopleTable";

function App() {
    return (
        <PeopleTable/>
    )
}

export default App;
