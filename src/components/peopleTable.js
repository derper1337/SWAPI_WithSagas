import {put} from "redux-saga/effects";
import {LOAD_USERS} from "../redux/reducers/peopleReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Paginator from "./paginator";

export default function PeopleTable() {
    const dispatch = useDispatch();
    const changePage = (newPage) => {
      dispatch({
          type: LOAD_USERS,
          payload: {
             page: newPage,
             search: people.search,
          }
      })
    }
    const changeSearch = (event) => {
        dispatch({
            type: LOAD_USERS,
            payload: {
                page: 1,
                search: event.target.value,
            }
        })
    }
    useEffect(() => {
        dispatch({type: LOAD_USERS, payload: {page: 1, search: ""}})
    }, []);
    const people = useSelector(state => state.people);

    return (
        <div>
            <h2> Star Wars People </h2>
            <input placeholder={"search..."} onChange={changeSearch}
                   value={people.search} style={{marginBottom:"10px"}}/>
            {people.loading
                ? <div>Loading...</div>
                : <table border={1} width={"100%"} cellPadding={2} cellSpacing={0}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth year</th>
                        <th>Eye color</th>
                        <th>Gender</th>
                        <th>Height</th>
                    </tr>
                    </thead>
                    <tbody>
                    {people?.data?.results?.map(char =>{
                        return(
                            <tr key={char.name}>
                                <td>{char.name}</td>
                                <td>{char.birth_year}</td>
                                <td>{char.eye_color}</td>
                                <td>{char.gender}</td>
                                <td>{char.height}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>}
            <Paginator currentPage={people.page} totalItems={people.data.count}
            onChange={changePage}
            />
        </div>
    );
}
