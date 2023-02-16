import React from "react";

import PoliciesData from "../../data/Policies.json"

function Policies() {
  console.log(PoliciesData);
  return (
    <article className="w-full bg-white py-4">
      <div className="px-3 tablet:px-6 desktop:px-10 pb-4">
        <h2 className="text-2xl font-bold text-secundaryColor">
          Qué tenés que saber
        </h2>
      </div>
      <hr className="w-full text-secundaryColor" />
      <div className="grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 px-3 tablet:px-6 desktop:px-10 pt-4">
        <div className="grid gap-1 pb-4">
          <h2 className="text-thirdColor text-lg font-bold">
            Normas de la casa
          </h2>
          <div className="grid gap-3">
            {PoliciesData[0]?.standards.map((stg, index) => {
              return (
                <p key={index} className="text-sm text-grayColor">
                  {stg}
                </p>
              );
            })}
          </div>
        </div>
        <div className="grid gap-1 pb-4">
          <h2 className="text-thirdColor text-lg font-bold">
            Salud y seguridad
          </h2>
          <div className="grid gap-3">
            {PoliciesData[0]?.safety.map((stg, index) => {
              return (
                <p key={index} className="text-sm text-grayColor">
                  {stg}
                </p>
              );
            })}
          </div>
        </div>
        <div className="grid gap-1 pb-4">
          <h2 className="text-thirdColor text-lg font-bold">
            Política de cancelación
          </h2>
          <div className="grid gap-3">
            {PoliciesData[0]?.cancellation.map((stg, index) => {
              return (
                <p key={index} className="text-sm text-grayColor">
                  {stg}
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
