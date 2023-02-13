import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ item }) {
  return (
    <>
    <Link to={`/Home/Categories/${item.id}`} className="w-full h-72 flex flex-col justify-center items-center shadow-xl rounded-lg" >
      
        <img src={item.img} alt='' className="h-4/5 w-full rounded-t-lg" />
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
    </>
  );
}

export default CategoryCard;
