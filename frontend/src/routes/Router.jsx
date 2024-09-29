import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PrevOrders from "../pages/PrevOrders";
import Cart from "../pages/Cart";

function Router({url}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home url={url} />} />
        <Route path="/orders" element={<PrevOrders url={url}/>} />
        <Route path="/cart" element={<Cart url={url}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
