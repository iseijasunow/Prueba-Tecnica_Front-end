/* eslint-disable import/no-cycle */
import { all } from "redux-saga/effects";
import users from "./users/sagas";

export default function* rootSaga() {
  yield all([users()]);
}
