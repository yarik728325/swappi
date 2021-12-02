import { takeEvery, put, call} from "@redux-saga/core/effects";
import { startRequest,endRequest} from "../../reducer/albums";
import fetchData from "../../../api";


function* checkSaga({payload}) {
  const { search,page}  = payload;
    let { data} = yield call(fetchData, `?page=${page}&search=${search}`);
    yield put(endRequest({
      dataPeople:data.results,
      count:data.count
    }))
} 

export default function* watcherUser() {
  yield takeEvery(startRequest.type, checkSaga);
}
