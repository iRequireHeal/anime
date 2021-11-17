import {combineReducers} from "@reduxjs/toolkit";
import {animeListApi} from "./services/animeListApi";
import {currentAnimeSlice} from "./modules/СurrentAnime/currentAnimeSlice";

export const rootReducer = combineReducers({
    [animeListApi.reducerPath]: animeListApi.reducer,
    currentAnime: currentAnimeSlice.reducer
})