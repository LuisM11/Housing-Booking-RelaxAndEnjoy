import React from "react";

import Seeker from "../components/Seeker";
import CategoriesContainer from "../components/CategoriesContainer";
import ProductsContainer from "./ProductsContainer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Seeker />
      <CategoriesContainer />
      <Outlet/>
    </>
  );
}

export default Home;
