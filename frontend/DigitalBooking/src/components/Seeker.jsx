import React from "react";

function Seeker() {
  return (
    <section className="w-full h-64 bg-thirdColor grid">
      <article className="w-11/12 grid grid-cols-1 m-auto gap-1">
        <h2 className="h-20 font-bold text-fourthColor text-xl tablet:text-[29px] desktop:text-5xl text-center tablet:py-5 desktop:py-0 leading-9">
          Busca ofertas en hoteles, casas y mucho mas
        </h2>
        <form
          action=""
          className="grid grid-rows-1 tablet:grid-cols-3 gap-1 tablet:gap-5"
        >
          <select
            name="destinos"
            id=""
            defaultValue="¿A donde vamos?"
            className="h-9 rounded shadow-2xl p-1"
          >
            <option value="sancarlos">San Carlos de Bariloche</option>
            <option value="buenosaires">Buenos Aires</option>
            <option value="mendoza">Mendoza</option>
            <option value="cordoba">Córdoba</option>
          </select>
          <input
            type="date"
            name=""
            id=""
            className="h-9 rounded shadow-2xl p-1"
          />
          <button
            type="submit"
            className="h-9 bg-mainColor text-fourthColor tablet:text-lg rounded shadow-2xl"
          >
            Buscar
          </button>
        </form>
      </article>
    </section>
  );
}

export default Seeker;
