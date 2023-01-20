import React from "react";

function RecommendationsCard({ item }) {
  return (
    <article className="w-full h-128 bg-fourthColor rounded-lg shadow-md flex flex-col justify-between items-center">
      <img
        src={item.crimg}
        alt={item.title}
        className="h-60 w-full rounded-b-lg"
      />
      <div className="w-11/12 h-64 flex flex-col justify-between py-3">
        <div className="h-13 flex justify-between">
          <aside>
            <span className="text-xs text-secundaryColor opacity-50">
              {item.category}{" "}
            </span>
            <span className="text-sm text-mainColor">
                <i className="uil uil-favorite"></i>
                <i className="uil uil-favorite"></i>
                <i className="uil uil-favorite"></i>
                <i className="uil uil-favorite"></i>
                <i className="uil uil-favorite"></i>
              </span>
            <h2 className="text-xl text-secundaryColor font-bold">{item.title}</h2>
          </aside>
          <aside className="flex flex-col justify-center items-end">
            <p className="w-8 text-center text-fourthColor text-lg bg-secundaryColor rounded-lg">8</p>
            <p className="text-sm text-right text-secundaryColor">Muy bueno</p>
          </aside>
        </div>
        <div className="h-6 flex gap-5">
          <span className="text-secundaryColor text-sm font-medium"><i className="uil uil-map-marker"></i> {item.location}</span>
          <a href="" className="text-mainColor text-sm">MOSTRAR EN EL MAPA</a>
        </div>
        <p className="h-24 font-medium text-sm">{item.description}</p>
        <button className="h-10 bg-mainColor text-fourthColor text-base font-bold rounded-md">Ver mas</button>
      </div>
    </article>
  );
}

export default RecommendationsCard;
