import React from "react";

function Seeker() {
  return (
    <section className="w-full h-64 bg-thirdColor flex flex-col justify-around items-center">
      <h2 className="w-96 h-20 font-bold text-fourthColor text-2xl text-center leading-9">Busca ofertas en hoteles, casas y mucho mas</h2>
      <form action="" className="w-11/12 flex flex-col gap-3">
        <select name="destinos" id="" className="h-9 rounded shadow-2xl p-1">
          <option value="" disabled selected hidden>
          <i class="uil uil-map-marker"></i> ¿A donde vamos?
          </option>
          <option value="sancarlos">San Carlos de Bariloche</option>
          <option value="buenosaires">Buenos Aires</option>
          <option value="mendoza">Mendoza</option>
          <option value="cordoba">Córdoba</option>
        </select>
        <input type="date" name="" id="" className="h-9 rounded shadow-2xl p-1" />
        <button type="submit" className="h-10 bg-mainColor text-fourthColor rounded shadow-2xl">Buscar</button>
      </form>
    </section>
  );
}

export default Seeker;
