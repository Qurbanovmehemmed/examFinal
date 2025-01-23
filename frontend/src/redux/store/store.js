import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productSlice from "../features/productSlice";
import basketSlice from "../features/basketSlice";

const persistConfig = {
  key: "root",
  storage,
};



const persistedReducerBasket = persistReducer(
  persistConfig,
  basketSlice.reducer
);

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    basket:persistedReducerBasket
    
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;