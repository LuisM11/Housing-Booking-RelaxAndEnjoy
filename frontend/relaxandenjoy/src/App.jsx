import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/Home");
    }
  });
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
