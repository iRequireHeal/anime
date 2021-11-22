import {createSlice} from "@reduxjs/toolkit";

export interface Page {
    page: number
}

const initialState: Page = {
    page: 0,
}

export const pageSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        nextPage(state: Page) {
            state.page += 10
        },
        prevPage(state: Page) {
            if (state.page > 0)
                state.page -= 10
        },
        firstPage(state: Page) {
            state.page = 0
        }
    }
})

export const {nextPage, prevPage, firstPage} = pageSlice.actions
export const selectId = (state: { id: Page }) => state.id