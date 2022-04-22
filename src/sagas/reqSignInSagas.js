import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_SUCCESS,
  FETCH_SIGNIN_REQUEST,
} from "../store/reqReducer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export function* reqSignInWorker({ payload }) {
  try {
    yield signInWithEmailAndPassword(auth, payload.email, payload.password);
    yield put({ type: FETCH_MESSAGES_SUCCESS });
  } catch (error) {
    yield put({ type: FETCH_MESSAGES_FAILURE, payload: error.code });
    console.error(error);
  }
}

export function* reqSignInWatcher() {
  yield takeLatest(FETCH_SIGNIN_REQUEST, reqSignInWorker);
}
