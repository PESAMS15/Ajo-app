import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    user: {},
    fetchingFailed: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchingProduct: (state)=>{
            state.isFetching = true
            state.user = {}
            state.fetchingFailed = null
        },
        fetchingSuccessful: (state, action)=>{
            state.isFetching = false
            state.user = action.payload
            state.fetchingFailed = null
        },
        fetchingError: (state, action)=>{
            state.isFetching = false
            state.user = {}
            state.fetchingFailed = action.payload
        }
    }
})




export const {fetchingProduct, fetchingSuccessful, fetchingError} = userSlice.actions

export default userSlice.reducer