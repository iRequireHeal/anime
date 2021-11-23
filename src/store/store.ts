import {configureStore} from "@reduxjs/toolkit";
import {animeListApi} from "./services/animeListApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {rootReducer} from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeListApi.middleware)
})

setupListeners(store.dispatch)
export type TStore = ReturnType<typeof store.getState>;