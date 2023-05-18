import React from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import Layout from "./layout/Layout";

function App() {
  const { authUser } = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route index element={<Main/>}></Route>
          <Route
            path="/filtered-products/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filtered-products/:type/:id"
            element={<SingleProduct />}
          />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
