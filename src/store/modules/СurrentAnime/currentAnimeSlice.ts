import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AnimeId {
    id: number
}

const initialState: AnimeId = {
    id: 1,
}

export const currentAnimeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        getId(state: AnimeId, {payload}: PayloadAction<number>) {
            state.id = payload
            console.log(state.id)
        }
    }
})

export const {getId} = currentAnimeSlice.actions
export const selectId = (state: {id:AnimeId}) => state.id