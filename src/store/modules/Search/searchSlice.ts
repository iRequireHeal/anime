import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";

let initialState = {
    titleName: "Naru"
}

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
        getInput(state, action) {
            state = action.payload
            console.log(state)
        }
    }
})

export const {getInput} = searchSlice.actions

