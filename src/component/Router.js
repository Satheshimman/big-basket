import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Cart } from "./Cart";
import { View } from "./View";


export const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/view" element={<View/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}