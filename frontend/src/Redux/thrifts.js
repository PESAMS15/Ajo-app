import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    thrifts: [],
    fetchingFailed: null
}

const thriftsSlice = createSlice({
    name: "thrifts",
    initialState,
    reducers: {
        fetchingProduct: (state)=>{
            state.isFetching = true
            state.thrifts = []
            state.fetchingFailed = null
        },
        fetchingSuccess: (state, action)=>{
            state.isFetching = false
            state.thrifts = action.payload
            state.fetchingFailed = null
        },
        fetchingError: (state, action)=>{
            state.isFetching = false
            state.thrifts = []
            state.fetchingFailed = action.payload
        }
    }
})




export const {fetchingProduct, fetchingSuccess, fetchingError} = thriftsSlice.actions

export default thriftsSlice.reducer