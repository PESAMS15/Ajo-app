import { configureStore } from "@reduxjs/toolkit";
// import  counterSlice  from "./mySlice";
// import allProdSlice from "./allProdSlice";
import user from "./user";
import thrifts from "./thrifts";



 const store = configureStore({
    reducer: {
        // counterSlice: counterSlice,
        user, 
        thrifts
        
    }
})

export default store