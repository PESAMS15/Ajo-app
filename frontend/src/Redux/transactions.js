import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    transactions: [],
    fetchingFailed: null
}

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        fetchProduct: (state)=>{
            state.isFetching = true
            state.transactions = []
            state.fetchingFailed = null
        },
        fetchSuccess: (state, action)=>{
            state.isFetching = false
            state.transactions = action.payload
            state.fetchingFailed = null
        },
        fetchError: (state, action)=>{
            state.isFetching = false
            state.transactions = []
            state.fetchingFailed = action.payload
        }
    }
})




export const {fetchProduct, fetchSuccess, fetchError} = transactionsSlice.actions

export default transactionsSlice.reducer