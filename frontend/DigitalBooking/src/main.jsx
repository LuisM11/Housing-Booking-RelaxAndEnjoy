import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import LogIn from "./routes/LogIn";
import SignIn from "./routes/SignIn";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Login" element={<LogIn />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
