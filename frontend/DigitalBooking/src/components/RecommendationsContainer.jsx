import React from "react";
import RecommendationsCard from "./RecommendationsCard";

import Recommendations from "../data/Recommendations.json";

function RecommendationsContainer() {
  return (
    <section className="h-full w-full flex flex-col justify-center items-center bg-secundaryColor bg-opacity-10 pb-5">
      <article className="w-11/12 mt-7">
        <h2 className="text-xl text-secundaryColor font-bold mb-2">Recomendaciones</h2>
        <div className="w-full flex flex-col gap-5">
          {Recommendations.map((item) => {
            return <RecommendationsCard key={item.id} item={item} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default RecommendationsContainer;
