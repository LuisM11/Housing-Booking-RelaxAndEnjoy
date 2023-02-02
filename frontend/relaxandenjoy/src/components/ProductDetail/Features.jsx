import React from "react";

function Features({ features }) {
  return (
    <article className="w-full py-4">
      <div className="px-3 tablet:px-6 desktop:px-10 pb-4">
        <h2 className="text-2xl font-bold text-secundaryColor">
          ¿Qué ofrece este lugar?
        </h2>
      </div>
      <hr className="w-full text-secundaryColor" />
      <div className="w-full grid grid-cols-2 desktop:grid-cols-4 gap-1 pt-4 px-3 tablet:px-6 desktop:px-10">
        {features.map((ft, index) => {
          return (
            <div key={index} className="w-[180px] h-10 flex gap-2 items-center">
              <i className={`${ft.icon} text-2xl text-thirdColor`}></i>
              <span className="text-sm text-grayColor">{ft.name}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Features;
