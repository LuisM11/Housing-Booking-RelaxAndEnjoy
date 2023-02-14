import React, { useState } from "react";

import Seeker from "../components/Seeker";
import CategoriesContainer from "../components/CategoriesContainer";
import { Outlet } from "react-router-dom";

function Home() {
  const [hideCategories, setHideCategories] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [cities, setCities] = useState([]);

  return (
    <>
      <Seeker
        setSearchData={setSearchData}
        cities={cities}
        setCities={setCities}
      />
      {hideCategories ? undefined : <CategoriesContainer />}
      <Outlet context={[setHideCategories, searchData, cities]} />
    </>
  );
}

export default Home;
