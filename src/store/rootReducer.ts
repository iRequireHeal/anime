import {combineReducers} from "@reduxjs/toolkit";
import {animeListApi} from "./services/animeListApi";
import {pageSlice} from "./modules/Pages/Page";
import {searchSlice} from "./modules/Search/searchSlice";

export const rootReducer = combineReducers({
    reducer: searchSlice.reducer,
    [animeListApi.reducerPath]: animeListApi.reducer,
    currentPage: pageSlice.reducer,
})