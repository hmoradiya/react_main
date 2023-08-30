import React from "react";
import "./Shop.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPriview from "../CategoriesPriview/CategoriesPriview";
import Category from "../Category/Category";

function Shop() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route index element={<CategoriesPriview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default Shop;
