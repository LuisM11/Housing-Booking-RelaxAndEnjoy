import React from "react";
import Calendar from "react-calendar";

function Availability() {
  return (
    <section className="w-full bg-secundaryColor bg-opacity-10 px-3 tablet:px-6 desktop:px-10 py-4">
      <article className="w-full grid">
        <h2 className="text-2xl font-bold text-secundaryColor my-3">
          Fechas disponibles
        </h2>
        <div className="w-full flex flex-col desktop:flex-row desktop:items-center gap-5">
          <Calendar
            showDoubleView
            className="w-[420px] tablet:w-full desktop:w-[65%] rounded-b-lg desktop:rounded-lg shadow-md p-5 border-none text-thirdColor"
          />
          <div className="desktop:w-[35%] desktop:h-32 desktop:bg-[#FFFFFF] rounded-lg desktop:shadow-md grid tablet:grid-cols-2 desktop:grid-cols-1 desktop:grid-rows-2 items-center p-5 gap-10 ">
            <p className="text-secundaryColor text-sm">
              Agregá tus fechas de viaje para obtener precios exactos.
            </p>
            <button className="h-9 w-full bg-mainColor text-fourthColor tablet:text-md rounded shadow-lg">
              Iniciar reserva
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Availability;
