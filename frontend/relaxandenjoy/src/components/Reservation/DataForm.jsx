import React, { useState } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { useEffect } from "react";
import dayjs from 'dayjs'
import axios from "axios";

const { RangePicker } = DatePicker;

function DataForm({ product }) {
  const { getCitiesList, user,setUser } = useGlobalContext()
  const [city, setcity] = useState([])
  const [cityform, setcityForm] = useState(0)

  /* const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(); */


  /* const onSubmit = (data) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Si despues deseas cancelar la reserva, solo se devuelve el 90% del valor total!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FBC02D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log({ ...data, arrival: arrival, dateRange: dates });
        Swal.fire({
          title: "¡Muchas gracias!",
          text: "Su reserva se ha realizado con éxito.",
          icon: "success",
          confirmButtonColor: "#FBC02D",
          confirmButtonText: "Ok",
        });
        reset();
        navigate("/Home");
      }
    });
  }; */
  const navigate = useNavigate();
  const [arrival, setArrival] = useState("");
  const [dates, setDates] = useState([]);

  const [data, setdata] = useState({
    initDate: null,
    finalDate: null,
    initTime: null,
    product: null,
    user: null,
    city: " "
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if (dates.length == 0 || arrival == "") {
      Swal.fire({
        icon: 'warning',
        title: '¡Hay datos que llenar!',
        text: "Debes especificar " + (dates.length == 0 ? "las fechas de reserva" : "") + (dates.length == 0 && arrival == "" ? " y " : "") + (arrival == "" ? "la hora de llegada" : ""),
        showConfirmButton: false,
        timer: 3000
      })

    } else {
      bookFetch()
    }
  }

  const bookFetch = async () => {
    const dataFetch = {
      initDate: dates[0],
      finaltDate: dates[1],
      initTime: arrival,
      product: product.id,
      user: user.id,
      city: cityform === 0 ? null : parseInt(cityform)
    }
    console.log(dataFetch)
    const response = await axios
      .post('http://localhost:8080/reservations',
        dataFetch,
        {
          withCredentials: false,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': user.Authorization
          },
          mode: 'cors'
        }

      ).then(r => {
        console.log(r)
        if(r.status === 201){
          Swal.fire({
            icon: 'success',
            title: 'Reservacion realizada con éxito!',
            showConfirmButton: false,
            timer: 5000
          })
          setUser(prev=> {
            return {...prev,id:r.data.user}
          })
          navigate('/Home')
        }
      })
      .catch(e => {
        console.log(e.message)
        Swal.fire({
          icon: 'error',
          title: 'Oh no...',
          text: 'Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde',
          showConfirmButton: false,
          timer: 2000
        })

      })


  }

  useEffect(() => {
    if (user == null) {
      navigate('/Home')
    }
    else {
      (async () => {
        const Cities = await getCitiesList()
        setcity(Cities)
      })()
    }
  }, [])


  function disabledDate(current) {
    return current && current < moment().startOf('day');
  }

  return (
    <form
      className="w-full h-full grid bg-thirdColor bg-opacity-10"
      onSubmit={onSubmit}
    >
      <h2 onClick={() => console.log(dates, arrival, cityform)} className="text-secundaryColor text-xl font-bold p-3">
        Completá tus datos
      </h2>
      <div className="grid grid-cols-1 desktop:grid-cols-3 desktop:row-span-3 gap-8 px-3 mb-8">
        <article className="grid tablet:grid-cols-2 gap-5 desktop:col-start-1 desktop:col-span-2 bg-white brdrs p-8">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Nombre" />
            </div>
            <TextInput
              disabled
              id="firstName"
              name="firstName"
              type="text"
              value={user?.fullname.split(" ")[0]}
            /* className={
              (errors.firstName ? "border-2  border-redWarning" : "") +
              " h-10 shadow-sm rounded"
            }
            {...register("firstName", {
              required: true,
              maxLength: 20,
              minLength: 2,
              message: "",
            })} */
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" color="gray" value="Apellido" />
            </div>
            <TextInput
              disabled
              id="lastName"
              name="lastName"
              type="text"
              value={user?.fullname.split(" ")[1]}
            /*  className={
               (errors.lastName ? "border-2  border-redWarning" : "") +
               " h-10 shadow-sm rounded"
             } */
            /* {...register("lastName", {
              required: true,
              maxLength: 20,
              minLength: 2,
              message: "",
            })} */
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Correo electrónico" />
            </div>
            <TextInput
              disabled
              id="email"
              type="email"
              name="email"
              required={true}
              value={user?.email}
            /* className={
              (errors.email ? "border-2  border-redWarning" : "") +
              " h-10 shadow-sm rounded"
            } */
            /* {...register("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:
                  "Por favor introduzca una dirección de correo electrónico válida",
              },
            })} */
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="city" value="Ciudad" />
            </div>
            <Select
              required
              id="countries"
              value={cityform}
              onChange={(e) => {
                setcityForm(e.target.value)
              }}
            /* {...register("city", {
              required: true,
            })} */
            >
              <option value={0} disabled={true} className="disabled:text-secundaryColor/70 text-xs">
                ¿De dónde eres?
              </option>
              {city.map((c, index) => (
                <option key={index} value={parseInt(c.id)} >
                  {c.name}
                </option>
              ))}

            </Select>
          </div>
        </article>

        <article className="grid desktop:col-start-1 desktop:col-span-2">
          <h2 className="text-secundaryColor text-lg font-bold mb-5">
            Disponibilidad para la reserva
          </h2>
          <Calendar className="tablet:hidden w-full rounded-lg shadow-md border-none text-thirdColor bg-white brdrs p-10" />
          <Calendar
            tileDisabled={({ date }) => date < new Date()}
            showDoubleView
            className=" hidden tablet:grid w-full rounded-lg shadow-md border-none text-thirdColor bg-white brdrs p-8"
          />
        </article>

        <article className="grid desktop:col-start-1 desktop:col-span-2">
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
                popupClassName="my-time-picker-popup"
                defaultValue={dayjs('10:00', 'HH:mm')}
                format={'HH:mm'}
                onChange={(value) =>
                  setArrival(moment(value.$d).format("HH:MM"))
                }
                className="w-full tablet:w-72"
              />
            </div>
          </div>
        </article>

        <article className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-1 desktop:col-start-3 desktop:row-start-1 desktop:row-end-4 bg-white brdrs gap-5">
          <div>
            <h2 className="text-secundaryColor text-xl font-bold my-2 desktop:my-5 mx-8">
              Detalle de la reserva
            </h2>
            <img
              src={product.crimg}
              alt=""
              className="tablet:w-[400px] desktop:w-full tablet:h-[250px] desktop:h-[500px] tablet:mx-8 desktop:mx-0"
            />
          </div>
          <div>
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
                placeholder={['Check in', 'Check out']}
                disabledDate={disabledDate}
                onChange={(values) => {
                  if (values != null) {
                    setDates(
                      values.map((item) => {
                        return moment(item.$d).format("YYYY-MM-DD");
                      })
                    );
                  } else {
                    setDates([])
                  }
                }}
              />
            </div>
            <div className="px-8">
              <Button
                type="submit"
                color=""
                className="w-full h-10 bg-mainColor rounded-md text-xs text-fourthColor font-bold my-8 mx-auto"
              >
                Confirmar reserva
              </Button>
            </div>
          </div>
        </article>
      </div>
    </form>
  );
}

export default DataForm;
