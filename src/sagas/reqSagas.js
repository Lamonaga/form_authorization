import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
} from "../store/reqReducer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export function* reqWorker({ payload }) {
  const userPage = {};
  try {
    yield createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    ).then((userCredential) => {
      const user = userCredential.user;
      user.name = payload.name;
      user.surname = payload.surname;
      userPage.name = user.name;
      userPage.surname = user.surname;
    });
    yield put({
      type: FETCH_MESSAGES_SUCCESS,
      payload: { name: userPage.name, surname: userPage.surname },
    });
  } catch (error) {
    yield put({ type: FETCH_MESSAGES_FAILURE, payload: error.code });
    console.error(error);
  }
}

export function* reqWatcher() {
  yield takeLatest(FETCH_MESSAGES_REQUEST, reqWorker);
}
