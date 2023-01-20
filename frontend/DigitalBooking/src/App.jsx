import React from "react";
import Header from "./components/Header";
import Seeker from "./components/Seeker";
import CategorysContainer from "./components/CategorysContainer";
import RecommendationsContainer from "./components/RecommendationsContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <body>
        <Seeker />
        <CategorysContainer />
        <RecommendationsContainer />
      </body>
      <Footer/>
    </div>
  );
}

export default App;
