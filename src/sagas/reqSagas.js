import {put, takeLatest} from 'redux-saga/effects'
import {actionReqData, FETCH_MESSAGES_REQUEST} from "../store/reqReducer";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";


export function* reqWorker({payload}) {
	try {
		yield createUserWithEmailAndPassword(auth, payload.email, payload.password)
			.then((userCredential) => {
				const user = userCredential.user
			})
	} catch (error) {
		console.error(error)
		console.log('Ошибка')
	}

	yield put(actionReqData)


}


export function* reqWatcher() {
	yield takeLatest(FETCH_MESSAGES_REQUEST, reqWorker)
}