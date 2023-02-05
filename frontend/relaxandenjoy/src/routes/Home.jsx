import React from "react";

import Seeker from "../components/Seeker";
import CategorysContainer from "../components/CategorysContainer";
import ProductsContainer from "../components/ProductsContainer";

function Home() {
  return (
    <>
      <Seeker />
      <CategorysContainer />
      <ProductsContainer />
    </>
  );
}

export default Home;
