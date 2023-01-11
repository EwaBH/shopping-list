import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import { NotFound } from "../NotFound/NotFound";
import Menu from "../Menu/Menu";
import Main from "../Main/Main";
import List from "../List/List";
import AddList from "../AddList/AddList";
import Products from "../Products/Products";
import AddProduct from "../AddProduct/AddProduct";
import style from "./App.module.scss";
import Product from "../Product/Product";
import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/list" element={<List />} />
          <Route path="/addlist" element={<AddList />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addproduct/:id" element={<AddProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
