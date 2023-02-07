import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContextProvider from "./context/GlobalContext";

import App from "./App";
import Home from "./routes/Home";
import LogIn from "./routes/LogIn";
import SignIn from "./routes/SignIn";
import ProductDetail from "./routes/ProductDetail";

import "./index.css";
import ProductsContainer from "./routes/ProductsContainer";
import CategorizedProducts from "./routes/CategorizedProducts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="Home" element={<Home />} >
              <Route index element = {<ProductsContainer/>} />
              <Route path="Categories/:id" element={<CategorizedProducts/>}/>
            </Route>
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Login" element={<LogIn />} />
            <Route path="/Product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
