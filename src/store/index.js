import {applyMiddleware, combineReducers, createStore} from "redux";


import createSagaMiddleware from 'redux-saga'
import {reqReducer} from "./reqReducer";
import rootSaga from "../sagas";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	regUser: reqReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)


export default store