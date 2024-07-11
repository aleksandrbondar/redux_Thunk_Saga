import { delay, put, takeEvery, all, call } from "redux-saga/effects"
import { decrementAsync, increment, decrement, incrementAsync } from "./counterSlice"
import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess, Post, setPostsAsync } from "./postsSlice"
import axios, { AxiosResponse } from "axios"

function* incrementSaga() {
  yield delay(1000)
  yield put(increment(1))
}

function* decrementSaga() {
  yield delay(1000)
  yield put(decrement(1))
}

function* fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  yield put(fetchPostsRequest());
  yield delay(2000)
  try {
    const response: AxiosResponse<Post[]> = yield call(axios.get, url);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchPostsFailure(error.message));
    } else {
      yield put(fetchPostsFailure('An unknown error occurred.'));
    }
  }
}

function* watchCounterSaga() {
  yield takeEvery(incrementAsync.type, incrementSaga)
  yield takeEvery(decrementAsync.type, decrementSaga)
  yield takeEvery(setPostsAsync.type, fetchPosts)
}

export default function* rootSaga() {
  yield all([watchCounterSaga()])
}

