import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initalState:{
        products:["ll"]
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchUserById.pending, (state, action) => {
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
                state.entities.push(action.payload)
                }
        )
        .addCase(fetchUserById.rejected, (state, action) => {
                    state.error = action.error 
                }
            )
    }

})
// tao reducer
const productReducer = productSlice.reducer;
const store = configureStore({
    reducer:{
        bbc:productReducer
    }
})