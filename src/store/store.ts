import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {animeListApi} from "./services/animeListApi";

export const store = configureStore({
    reducer: {
        [animeListApi.reducerPath]: animeListApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeListApi.middleware)
})