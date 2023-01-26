import React from "react";

import CategoryCard from "./CategoryCard";

import { useGlobalContext } from "../context/GlobalContext";

function CategorysContainer() {
  const { CategorysList } = useGlobalContext();

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
