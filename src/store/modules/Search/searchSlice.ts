import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";

let initialState = {
    titleName: "Naru"
}

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
        setInput(state, action) {
            state.titleName = action.payload
            console.log(state)
        }
    }
})

export const {setInput} = searchSlice.actions

