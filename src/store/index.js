import {applyMiddleware, combineReducers, createStore} from "redux";


import createSagaMiddleware from 'redux-saga'
import {reqReducer} from "./reqReducer";
import {reqWatcher} from "../sagas/reqSagas";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	reqData: reqReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(reqWatcher)


export default store