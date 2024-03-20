import { createSlice } from "@reduxjs/toolkit";
import user from "./Main.json"


export const Slice=createSlice({
    name:"Big-basket",
    initialState:{
        product:user.products,
        cart:[],
        fav:[]
    },
    reducers:{
        uparr:(state,action)=>{
            state.product=action.payload
        },
        cartt:(state,action)=>{
            state.cart=action.payload
        }
    }
})

export default Slice.reducer
export const {uparr,cartt   }=Slice.actions