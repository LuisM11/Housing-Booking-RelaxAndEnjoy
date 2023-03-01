import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ item, selectedCategory, setSelectedCategory }) {
  return (
    <div className={
      selectedCategory === item.id
        ? "w-full h-72 flex relative flex-col justify-center items-center shadow-xl rounded-lg bg-mainColor"
        : "w-full h-72 flex flex-col justify-center items-center shadow-xl rounded-lg"
    }>
      <Link
        className="h-full"
        to={`/Home/Categories/${item.id}`}

        onClick={() => setSelectedCategory(item.id)}
      >

        <img src={item.img} alt="" className="h-4/5 w-full rounded-t-lg" />
        <div className="w-full h-1/5 flex flex-col justify-center items-start ml-5">
          <h2 className="text-secundaryColor text-lg font-bold">
            {item.title}
          </h2>
          <p className="text-secundaryColor font-bold text-xs opacity-60">
            {item.description + " "}
            <span>{item.title}</span>
          </p>
        </div>
      </Link>
      <div className={selectedCategory == item.id ? "absolute top-0 right-0" : "hidden"}>
        <Link to="/Home">
          <i
            className="uil uil-times text-3xl text-mainColor mr-3"
            onClick={() => setSelectedCategory(0)}
          ></i>
        </Link>
      </div>
    </div>


  );
}

export default CategoryCard;
