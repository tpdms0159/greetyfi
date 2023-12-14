// reducers/index.js
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
 import storage from "redux-persist/lib/storage";
import dataBox from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { getDefaultNormalizer } from "@testing-library/react";

const persistConfig = {
    key: 'root',
    storage,

};

const myReducer = combineReducers({select: dataBox.reducer});

const newReducer = persistReducer(persistConfig, myReducer);

const store = configureStore({
    reducer: newReducer,
})

export default store;