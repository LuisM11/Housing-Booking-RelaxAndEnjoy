import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <article className="w-full h-128 tablet:h-64 bg-fourthColor rounded-lg shadow-md grid grid-rows-2 tablet:grid-cols-2 tablet:py-2 tablet:gap-2">
      <img
        src={item.crimg}
        alt={item.name}
        title={item.name}
        className="h-60 w-full rounded-b-lg tablet:rounded-l-none tablet:rounded-r-lg"
      />
      <div className="w-full h-64 flex flex-col p-2">
        <div className="h-13 flex justify-between">
          <aside>
            <span className="text-xs text-secundaryColor opacity-50">
              {item.category}{" "}
            </span>
            <span
              className={
                item.popularity < 3
                  ? "text-md text-[#b23b3b]"
                  : "text-md text-[#10771A]"
              }
            >
              {item.popularity === 0 ? (
                item.popularity
              ) : item.popularity < 2 ? (
                <i className="uil uil-favorite"></i>
              ) : item.popularity < 3 ? (
                <>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </>
              ) : item.popularity < 4 ? (
                <>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </>
              ) : item.popularity < 5 ? (
                <>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </>
              ) : (
                <>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </>
              )}
            </span>
            <h2 className="text-xl text-secundaryColor font-bold">
              {item.name}
            </h2>
          </aside>
          <aside className="flex flex-col justify-center items-end">
            <p className="w-8 text-center text-fourthColor text-lg bg-secundaryColor rounded-lg">
              {item.popularity}
            </p>
            <p className="text-sm text-right text-secundaryColor">
              {item.popularity < 3
                ? "Regular"
                : item.popularity < 4
                ? "Bueno"
                : "Excelente"}
            </p>
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
        <Link
          to={`/Product/${item.id}`}
          className="h-10 bg-mainColor flex justify-center items-center text-fourthColor text-lg font-bold rounded-md"
        >
          Ver mas
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
