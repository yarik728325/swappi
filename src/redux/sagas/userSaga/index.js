import { takeEvery, put, call} from "@redux-saga/core/effects";
import { startRequest,endRequest, startRequestTracks,endRequestTrack } from "../../reducer/albums";
import fetchData from "../../../api";

function* checkSaga() {
  let data = yield call(fetchData, "/v1/me/playlists");
  yield put(endRequest(data))
}
function* loadingTracks({payload}){
  const check = payload.split("https://api.spotify.com/");
  let data = yield call(fetchData, check[1]);
  yield put(endRequestTrack(data));
  
}

export default function* watcherUser() {
  yield takeEvery(startRequestTracks.type,loadingTracks);
  yield takeEvery(startRequest.type, checkSaga);
}
