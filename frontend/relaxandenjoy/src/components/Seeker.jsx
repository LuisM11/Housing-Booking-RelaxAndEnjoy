import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { DatePicker } from "antd";
import moment from "moment";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";


const { RangePicker } = DatePicker;


function Seeker({setSearchData,cities,setCities}) {
  const { getCitiesList } = useGlobalContext();
  const { register, handleSubmit } = useForm();
  const [dates, setDates] = useState([]);
  
  const nav = useNavigate()

  const getCitiestoSelect = async () => {
    const Cities = await getCitiesList();
    setCities(Cities)
  }
  const onSubmit = (data) => {
    console.log({ ...data, dateRange: dates });
    setSearchData(data)
    nav('/Home/Search')
    
  };

  useEffect(() => {
    getCitiestoSelect()
  }, [])

  return (
    <section className="w-full h-64 bg-thirdColor grid">
      <article className="w-11/12 grid grid-cols-1 m-auto gap-1">
        <h2 className="h-20 font-bold grid items-center text-fourthColor text-2xl tablet:text-3xl desktop:text-4xl text-center tablet:py-5 desktop:py-0 leading-9">
          Busca ofertas en hoteles, casas y mucho mas
        </h2>
          <form
            className="grid grid-rows-1 tablet:grid-cols-3 gap-1 tablet:gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <select
              defaultValue={""}
              required
              name="destinos"
              id=""
              className="invalid:text-secundaryColor/50 text-secundaryColor  h-9 rounded shadow-2xl p-1"
              {...register("city")}
            >
              <option value={""} disabled>
                ¿A donde vamos?
              </option>
              {cities.map((c, index) => (
                <option key={index} value={c.name.toLocaleLowerCase().slice(" ")}>
                  {c.name}
                </option>
              ))}
            </select>
            <RangePicker
              onChange={(values) => {
                setDates(
                  values.map((item) => {
                    return moment(item.$d).format("DD-MM-YYYY");
                  })
                );
              }}
            />
            <input
              type="submit"
              className="h-9 bg-mainColor text-fourthColor tablet:text-lg rounded shadow-2xl hover:cursor-pointer"
              value={'Buscar'}
            />
              
            
          </form>
      </article>
    </section>
  );
}

export default Seeker;
