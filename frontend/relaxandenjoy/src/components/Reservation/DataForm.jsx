import React, { useState } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

function DataForm({ product }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [arrival, setArrival] = useState();
  const [dates, setDates] = useState([]);

  const onSubmit = (data) => {
    console.log({ ...data, arrival: arrival, dateRange: dates });
    reset();
  };

  return (
    <form
      className="w-full h-full bg-thirdColor bg-opacity-10 p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-secundaryColor text-xl font-bold mb-5">
        Completá tus datos
      </h2>
      <div className="grid grid-cols-3 row-span-3 gap-8">
        <article className="grid grid-cols-2 gap-5 col-start-1 col-span-2 bg-white brdrs p-8">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Nombre" />
            </div>
            <TextInput
              id="firstName"
              name="firstName"
              type="text"
              required={true}
              className={
                (errors.firstName ? "border-2  border-redWarning" : "") +
                " h-10 shadow-sm rounded"
              }
              {...register("firstName", {
                required: true,
                maxLength: 20,
                minLength: 2,
                message: "",
              })}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" color="gray" value="Apellido" />
            </div>
            <TextInput
              id="lastName"
              name="lastName"
              type="text"
              required={true}
              className={
                (errors.lastName ? "border-2  border-redWarning" : "") +
                " h-10 shadow-sm rounded"
              }
              {...register("lastName", {
                required: true,
                maxLength: 20,
                minLength: 2,
                message: "",
              })}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Correo electrónico" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              required={true}
              className={
                (errors.email ? "border-2  border-redWarning" : "") +
                " h-10 shadow-sm rounded"
              }
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message:
                    "Por favor introduzca una dirección de correo electrónico válida",
                },
              })}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="city" value="Ciudad" />
            </div>
            <Select
              id="countries"
              required={true}
              {...register("city", {
                required: true,
              })}
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
        </article>

        <article className="grid col-start-1 col-span-2">
          <h2 className="text-secundaryColor text-lg font-bold mb-5">
            Seleccioná tu fecha de reserva
          </h2>
          <Calendar
            showDoubleView
            className="w-full rounded-lg shadow-md border-none text-thirdColor bg-white brdrs p-8"
          />
        </article>

        <article className="grid col-start-1 col-span-2">
          <h2 className="text-secundaryColor text-lg font-bold mb-5">
            Tu horario de llegada
          </h2>
          <div className="bg-white brdrs grid gap-5 p-8">
            <span className="text-secundaryColor flex items-center gap-2">
              <i className="uil uil-check-circle text-2xl"></i>
              Tu habitación va a estar lista para el check-in entre las 10:00 AM
              y las 11:00 PM
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-secundaryColor text-sm">
                Inidicá tu horario estimado de llegada
              </span>
              <TimePicker
                required={true}
                onChange={(value) =>
                    setArrival(moment(value.$d).format("HH:MM:SS"))
                }
                className="w-1/2"
              />
            </div>
          </div>
        </article>

        <article className="flex flex-col col-start-3 row-start-1 row-end-4 bg-white brdrs">
          <h2 className="text-secundaryColor text-xl font-bold my-5 mx-8">
            Detalle de la reserva
          </h2>
          <img src={product.crimg} alt="" className="w-full h-128" />
          <div className="grid gap-2 p-8">
            <p className="text-secundaryColor opacity-50">
              {product?.categories?.title}
            </p>
            <h2 className="text-secundaryColor text-2xl font-bold">
              {product?.name}
            </h2>
            <span
              className={
                product.popularity < 3
                  ? "text-md text-[#b23b3b]"
                  : "text-md text-[#10771A]"
              }
            >
              {product.popularity === 0 ? (
                product.popularity
              ) : product.popularity < 2 ? (
                <i className="uil uil-favorite"></i>
              ) : product.popularity < 3 ? (
                <>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </>
              ) : product.popularity < 4 ? (
                <>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </>
              ) : product.popularity < 5 ? (
                <>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </>
              ) : (
                <>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                  <i className="uil uil-favorite"></i>
                </>
              )}
            </span>
            <p className="text-sm text-secundaryColor">
              <i className="uil uil-map-marker"></i>
              {product?.location}
            </p>
          </div>
          <div className="grid px-8">
            <RangePicker
              onChange={(values) => {
                setDates(
                  values.map((item) => {
                    return moment(item.$d).format("DD-MM-YYYY");
                  })
                );
              }}
            />
          </div>
          <Button
            type="submit"
            color=""
            className="w-96 h-10 bg-mainColor rounded-md text-xs text-fourthColor font-bold my-8 mx-auto"
          >
            Confirmar reserva
          </Button>
        </article>
      </div>
    </form>
  );
}

export default DataForm;
