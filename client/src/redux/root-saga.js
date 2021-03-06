import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop-data/shop-data.sagas";

export default function* rootSaga() {
  yield all([call(cartSagas), call(shopSagas), call(userSagas)]);
}
