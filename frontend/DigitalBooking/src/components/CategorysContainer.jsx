import React from "react";
import CategoryCard from "./CategoryCard";

import Categorys from "../data/Categorys.json";

function CategorysContainer() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center">
      <article className="w-11/12 mt-7">
        <h2 className="text-xl text-secundaryColor font-bold mb-2">Buscar por tipo de alojamiento</h2>
        <div className="w-full flex flex-col gap-5">
          {Categorys.map((item) => {
            return <CategoryCard key={item.id} item={item} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default CategorysContainer;
