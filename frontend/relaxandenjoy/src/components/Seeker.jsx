import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DatePicker } from "antd";
import moment from "moment";

import Cities from "../data/Cities.json";

function Seeker() {
  const { register, handleSubmit } = useForm();
  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState([]);

  const onSubmit = (data) => {
    console.log({ ...data, dateRange: dates });
  };

  return (
    <section className="w-full h-64 bg-thirdColor grid">
      <article className="w-11/12 grid grid-cols-1 m-auto gap-1">
        <h2 className="h-20 font-bold text-fourthColor text-[22px] tablet:text-[29px] desktop:text-5xl text-center tablet:py-5 desktop:py-0 leading-9">
          Busca ofertas en hoteles, casas y mucho mas
        </h2>
        <form
          action=""
          className="grid grid-rows-1 tablet:grid-cols-3 gap-1 tablet:gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <select
          required
            name="destinos"
            id=""
            className="invalid:text-secundaryColor/50 text-secundaryColor  h-9 rounded shadow-2xl p-1"
            {...register("city")}
          >
            <option value={''} disabled selected> ¿A donde vamos? </option>
            {Cities.map((c, index) => (
              <option key={index} value={c.name.toLocaleLowerCase().slice(" ")}>
                {c.name}
              </option>
            ))}
          </select>
          {/* <input
            type="date"
            name=""
            id=""
            className="h-9 rounded shadow-2xl p-1"
          /> */}
          <RangePicker
            onChange={(value) => {
              setDates(
                value.map((item) => {
                  return moment(item).format("DD-MM-YYYY");
                })
              );
            }}
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
