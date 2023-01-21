import React, { useState, useEffect } from "react";
import axios from "axios";

import CategoryCard from "./CategoryCard";

/* import Categorys from "../data/Categorys.json"; */

function CategorysContainer() {
  const [CategorysList, setCategorysList] = useState([]);

  useEffect(() => {
    getCategorysList();
  }, []);

  const getCategorysList = async () => {
    return await axios
      .get("http://localhost:8080/Categorys")
      .then((resp) => setCategorysList(resp.data));
  };

  return (
    <section className="h-full w-full">
      <article className="w-11/12 my-5 mx-auto grid gap-4">
        <h2 className="text-xl text-secundaryColor font-bold">
          Buscar por tipo de alojamiento
        </h2>
        <div className="w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-5">
          {CategorysList.map((item) => {
            return <CategoryCard key={item.id} item={item} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default CategorysContainer;
