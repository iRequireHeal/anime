import {createSlice} from "@reduxjs/toolkit";

export interface Page {
    favourites: number[]
}

const initialState: Page = {
    favourites: [1, 2, 3],
}
export const Favourites = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        setFavourite(state, action){
            return { ...state, favourites: [...state.favourites, action.payload] };
        },
    }
})

export {}
export const {setFavourite} = Favourites.actions