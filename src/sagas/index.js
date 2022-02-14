import {all} from 'redux-saga/effects'
import {reqWatcher} from "./reqSagas";
import {reqSignInWatcher} from "./reqSignInSagas";

export default function* rootSaga () {
	yield all([reqWatcher(), reqSignInWatcher()])

}