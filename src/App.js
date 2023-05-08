import React from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filtered-products/:type"
            element={<FilteredProducts />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
