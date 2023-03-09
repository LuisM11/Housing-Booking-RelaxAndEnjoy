import React from "react";

import PoliciesData from "../data/Policies.json";

function Policies({product}) {


  return (
    <article className="w-full bg-white py-4">
      <div className="px-3 tablet:px-6 desktop:px-10 pb-4">
        <h2 className="text-2xl font-bold text-secundaryColor">
          Qué tenés que saber
        </h2>
      </div>
      <hr className="w-full text-secundaryColor" />
      <div className="grid auto-rows-min gap-5 grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 px-3 tablet:px-6 desktop:px-10 pt-4">
        <div className="flex flex-col gap-3 mb-4">
          <h2 className="text-thirdColor text-lg font-bold">
            Normas de la casa
          </h2>

          <div className="flex flex-col gap-3">
           
            {product?.rules != null && product?.rules.split("\n").map((r, index) => {
              return (
                <p key={index} className="text-sm text-grayColor">
                  {r}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <h2 className="text-thirdColor text-lg font-bold">
            Salud y seguridad
          </h2>
          <div className="flex flex-col gap-3">
            {product?.healthAndSafety != null && product?.healthAndSafety.split("\n").map((healthSafety, index) => {
              return (
                <p key={index} className="text-sm text-grayColor">
                  {healthSafety}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <h2 className="text-thirdColor text-lg font-bold">
            Política de cancelación
          </h2>
          <div className="flex flex-col gap-3">
            {product?.politics != null && product?.politics.split("\n").map((policie, index) => {
              return (
                <p key={index} className="text-sm text-grayColor">
                  {policie}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Policies;
