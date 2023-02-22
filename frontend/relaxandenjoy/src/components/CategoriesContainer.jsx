import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

function CategoriesContainer() {
  const { CategoriesList } = useGlobalContext();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const location = useLocation()
  useEffect(() => {
    if(location.pathname=="/Home"){
      setSelectedCategory(0)
    }
  }, [location.pathname])
  

  return (
    <section className="h-full w-full">
      <article className="w-11/12 my-5 mx-auto grid gap-4">
        <div className="flex justify-between">
          <h2 className="text-xl text-secundaryColor font-bold">
            Buscar por tipo de alojamiento
          </h2>
          <div className={selectedCategory !== 0 ? "flex" : "hidden"}>
            <Link to="/Home">
              <i
                className="uil uil-times text-3xl text-mainColor mr-3"
                onClick={() => setSelectedCategory(0)}
              ></i>
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-5">
          {CategoriesList?.map((item) => {
            return (
              <CategoryCard
                key={item.id}
                item={item}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default CategoriesContainer;
