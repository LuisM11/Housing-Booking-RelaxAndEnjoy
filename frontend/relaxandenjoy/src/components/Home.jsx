import React from "react";

import Seeker from "../components/Seeker";
import CategorysContainer from "../components/CategorysContainer";
import RecommendationsContainer from "../components/RecommendationsContainer";

function Home() {
  return (
    <>
      <Seeker />
      <CategorysContainer />
      <RecommendationsContainer />
    </>
  );
}

export default Home;
