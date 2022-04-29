import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/reducers";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
window.store=store;
export default store;