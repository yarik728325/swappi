import { takeEvery, put, call} from "@redux-saga/core/effects";
import { startRequest,endRequest } from "../../reducer/albums";
import fetchData from "../../../api";


function* checkSaga() {
  let data = yield call(fetchData, "/v1/me/playlists");
  yield put(endRequest(data))
}

export default function* watcherUser() {
  yield takeEvery(startRequest.type, checkSaga);
}
