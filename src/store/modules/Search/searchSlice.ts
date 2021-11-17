import {createSlice} from "@reduxjs/toolkit";

const initialState = ''

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
        getInput(state, action) {
            state = action.payload
        }
    }
})