import React from "react";
import RecommendationsCard from "./RecommendationsCard";

import Recommendations from "../data/Recommendations.json";

function RecommendationsContainer() {
  return (
    <section className="h-full w-full grid bg-secundaryColor bg-opacity-10">
      <article className="w-11/12 grid gap-4 my-5 mx-auto">
        <h2 className="text-xl text-secundaryColor font-bold">
          Recomendaciones
        </h2>
        <div className="w-full grid grid-cols-1 desktop:grid-cols-2 gap-5">
          {Recommendations.map((item) => {
            return <RecommendationsCard key={item.id} item={item} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default RecommendationsContainer;
