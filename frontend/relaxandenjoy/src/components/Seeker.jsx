import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from "antd";
import { useGlobalContext } from "../context/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const { RangePicker } = DatePicker;

function Seeker({ setSearchData, cities, setCities }) {
  const { getCitiesList } = useGlobalContext();
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: { city: "" },
  });
  const nav = useNavigate();
  const loc = useLocation();
  const getCitiestoSelect = async () => {
    const Cities = await getCitiesList();
    setCities(Cities);
  };

  const onSubmit = (data) => {
    if (data.city === "" && data.Rangepicker == undefined) {
      console.log(data);
      Swal.fire({
        icon: "warning",
        title: "Escoge una ciudad de destino o un rango de fechas",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      setSearchData(data);

      nav("/Home/Search");
    }
  };

  useEffect(() => {
    if (loc.pathname == "/Home") {
      reset();
    }
    getCitiestoSelect();
  }, [loc]);

  const disabledDate = (current) => {
    let todayZero = new Date();
    todayZero.setHours(0, 0, 0, 0);
    let daysBefore = current.toDate() < todayZero;
    let todayTwelve = new Date();
    todayTwelve.setHours(23, 58, 0, 0);
    let todayLimit = new Date();
    todayLimit.setHours(18, 0, 0, 0);
    let today = todayLimit < current.toDate() && current.toDate() < todayTwelve;
    return today || daysBefore;
  };

  return (
    <section className="w-full h-64 bg-thirdColor grid">
      <article className="w-11/12 grid grid-cols-1 m-auto gap-1">
        <h2
          
          className="h-20 font-bold grid items-center text-fourthColor text-2xl tablet:text-3xl desktop:text-4xl text-center tablet:py-5 desktop:py-0 leading-9"
        >
          Busca ofertas en hoteles, casas y mucho más
        </h2>
        <form
          className="tablet:h-9 desktop:h-10 grid grid-rows-1 tablet:grid-cols-[2fr_2fr_1fr] gap-2 tablet:gap-3 desktop:gap-4 desktop:w-5/6 tablet:mx-auto "
          onSubmit={handleSubmit(onSubmit)}
        >
          <select
            name="destinos"
            id=""
            className="text-secundaryColor text-sm tablet:text-base h-8 tablet:h-full rounded shadow-2xl p-1"
            {...register("city", { required: false })}
          >
            <option value={""} disabled>
              ¿A dónde vamos?
            </option>
            {cities.map((c, index) => (
              <option key={index} value={c.name.toLocaleLowerCase().slice(" ")}>
                {c.name}
              </option>
            ))}
          </select>
          <Controller
            control={control}
            name="Rangepicker"
            render={({ field: { onChange, value } }) => (
              <RangePicker
                className="rounded text-sm tablet:text-base h-8 tablet:h-full"
                disabledDate={disabledDate}
                placeholder={["Fecha de inicio", "Fecha de fin"]}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <input
            type="submit"
            className="text-base h-8 tablet:h-full bg-mainColor text-fourthColor font-semibold tablet:text-lg rounded shadow-2xl hover:cursor-pointer"
            value={"Buscar"}
          />
        </form>
      </article>
    </section>
  );
}

export default Seeker;
