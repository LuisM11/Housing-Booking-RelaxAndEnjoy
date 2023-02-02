import React from "react";

function LocationAndScore({ product }) {
  return (
    <article className="w-full bg-secundaryColor bg-opacity-10 flex justify-between items-center px-3 tablet:px-6 desktop:px-10 py-3">
      <aside className="flex items-center gap-1">
        <i className="uil uil-map-marker text-2xl text-thirdColor"></i>{" "}
        <span className="text-lg text-secundaryColor">{product.location}</span>
      </aside>
      <aside className="flex justify-center items-center gap-3">
        <div className="text-right">
          <p className="text-secundaryColor text-xs text-right">Muy bueno</p>
          <span
            className={
              product.popularity < 3
                ? "text-md text-[#b23b3b]"
                : "text-md text-[#10771A]"
            }
          >
            <i className="uil uil-favorite"></i>
            {product.popularity}
          </span>
        </div>
        <p className="w-8 h-8 flex items-center justify-center text-fourthColor text-lg bg-secundaryColor rounded-lg">
          8
        </p>
      </aside>
    </article>
  );
}

export default LocationAndScore;
