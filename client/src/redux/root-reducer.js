import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducers";
import shopDataReducer from "./shop-data/shop-data.reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import SignInOptionReducer from "./sign-in-option/sign-in-option.reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shopData: shopDataReducer,
  signInOption: SignInOptionReducer,
});

export default persistReducer(persistConfig, rootReducer);
