import React from "react";
import { Link } from "react-router-dom";

function RecommendationsCard({ item }) {
  return (
    <article className="w-full h-128 tablet:h-64 bg-fourthColor rounded-lg shadow-md grid grid-rows-2 tablet:grid-cols-2 tablet:py-2 tablet:gap-2">
      <img
        src={item.crimg}
        alt={item.title}
        title={item.title}
        className="h-60 w-full rounded-b-lg tablet:rounded-l-none tablet:rounded-r-lg"
      />
      <div className="w-full h-64 flex flex-col p-2">
        <div className="h-13 flex justify-between">
          <aside>
            <span className="text-xs text-secundaryColor opacity-50">
              {item.category}{" "}
            </span>
            <span className={item.popularity < 3 ? "text-md text-[#b23b3b]" : "text-md text-[#10771A]"}>
              <i className="uil uil-favorite"></i>
              {item.popularity}
            </span>
            <h2 className="text-xl text-secundaryColor font-bold">
              {item.title}
            </h2>
          </aside>
          <aside className="flex flex-col justify-center items-end">
            <p className="w-8 text-center text-fourthColor text-lg bg-secundaryColor rounded-lg">
              8
            </p>
            <p className="text-sm text-right text-secundaryColor">Muy bueno</p>
          </aside>
        </div>
        <div className="h-6 flex gap-5 mb-0">
          <span className="text-secundaryColor text-sm font-medium">
            <i className="uil uil-map-marker"></i> {item.location}
          </span>
          <a href="" className="text-mainColor text-sm">
            MOSTRAR EN EL MAPA
          </a>
        </div>
        <p className="h-24 font-medium text-sm mb-2">{item.description}</p>
        <Link to={`/Product/${item.id}`} className="h-10 bg-mainColor flex justify-center items-center text-fourthColor text-lg font-bold rounded-md">
          Ver mas
        </Link>
      </div>
    </article>
  );
}

export default RecommendationsCard;
