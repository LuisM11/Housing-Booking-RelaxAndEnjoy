import React from "react";

function LocationAndScore({ product }) {
  return (
    <article className="w-full bg-secundaryColor bg-opacity-10 flex justify-between items-center px-3 tablet:px-6 desktop:px-10 py-3">
      <aside className="flex items-center gap-1">
        <i className="uil uil-map-marker text-2xl text-thirdColor"></i>{" "}
        <span className="text-base text-secundaryColor">{product?.location}</span>
      </aside>
      <aside className="flex justify-center items-center gap-3">
        <div className="text-right">
          <p className="text-secundaryColor text-xs text-right">
            {product.popularity < 3
              ? "Regular"
              : product.popularity < 4
              ? "Bueno"
              : "Excelente"}
          </p>
          <span
            className={
              product.popularity < 3
                ? "text-md text-[#b23b3b]"
                : "text-md text-[#10771A]"
            }
          >
            {product.popularity === 0 ? (
              product.popularity
            ) : product.popularity < 2 ? (
              <i className="uil uil-favorite"></i>
            ) : product.popularity < 3 ? (
              <>
                <i className="uil uil-favorite"></i>
                <i className="uil uil-favorite"></i>
              </>
            ) : product.popularity < 4 ? (
              <>
                <i className="uil uil-favorite"></i>
                <i className="uil uil-favorite"></i>
                <i className="uil uil-favorite"></i>
              </>
            ) : product.popularity < 5 ? (
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
        </div>
        <p className="w-8 h-8 flex items-center justify-center text-fourthColor text-lg bg-secundaryColor rounded-lg m-1 p-5">
          {product.popularity}
        </p>
      </aside>
    </article>
  );
}

export default LocationAndScore;
