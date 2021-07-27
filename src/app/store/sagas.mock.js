import * as mutations from "./mutations";
import { take } from "redux-saga/effects";

export function* taskCreationSaga() {
  while (true) {
    const abc = yield take(mutations.REQUEST_TASK_CREATION);
  }
}
