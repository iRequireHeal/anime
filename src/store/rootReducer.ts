import {combineReducers} from "@reduxjs/toolkit";
import {animeListApi} from "./services/animeListApi";
import {currentAnimeSlice} from "./modules/СurrentAnime/currentAnimeSlice";
import {searchSlice} from "./modules/Search/searchSlice";

export const rootReducer = combineReducers({
    reducer: searchSlice.reducer,
    [animeListApi.reducerPath]: animeListApi.reducer,
    currentAnime: currentAnimeSlice.reducer,
})