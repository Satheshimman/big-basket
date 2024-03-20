import { configureStore } from "@reduxjs/toolkit";
import sathesh from "./Reducer"

export const Store=configureStore({
    reducer:{
        Array:sathesh
    }
})