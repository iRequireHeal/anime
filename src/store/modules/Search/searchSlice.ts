import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    titleName: "",
    isUsed: false
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getInput(state, action) {
            state.titleName = action.payload
        },
    }
})

export const {getInput} = searchSlice.actions
