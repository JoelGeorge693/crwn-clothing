import { all, call, put, takeLatest } from "redux-saga/effects";
import ShopActionTypes from "./shop-data.types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop-data.actions";

export function* fetchCollectiosAsync() {
  yield console.log("I am don't know");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectiosAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
