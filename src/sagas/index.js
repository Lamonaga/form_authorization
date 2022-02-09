import {all} from 'redux-saga/effects'
import {reqWatcher} from "./reqSagas";

export default function* rootSaga () {
	yield all([reqWatcher])

}