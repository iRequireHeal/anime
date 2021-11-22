import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    titleName: "",
    isUsed: false
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInput(state, action) {
            state.titleName = action.payload
        },
    }
})

export const {setInput} = searchSlice.actions
