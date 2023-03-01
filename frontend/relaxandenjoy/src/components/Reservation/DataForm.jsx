import React, { useState } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { useEffect } from "react";
import dayjs from 'dayjs'
import axios from "axios";




const { RangePicker } = DatePicker;

function DataForm({ product }) {
  
  const { getCitiesList, user,setUser ,getProductReservations} = useGlobalContext()
  const [city, setcity] = useState([])
  const [cityform, setcityForm] = useState(0)
  const navigate = useNavigate();
  const [arrival, setArrival] = useState("");
  const [dates, setDates] = useState([]);
  const [currentReservations, setcurrentReservations] = useState([])
  const param = useParams()

  const reservationsFetch = async ()=>{
    const reservations = await getProductReservations(param.id)
    if(reservations.status == 200){

      setcurrentReservations(reservations.data)
    }
    /* console.log(product,"reservations") */
  }

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
      .post('http://localhost:8080/reservations', //'http://3.145.6.239:8080/reservations'
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
      (async () => {
        const Cities = await getCitiesList()
        setcity(Cities)
      })()
      reservationsFetch()
  }, [])


  const disableCalendar = ({date}) => {
    let bool
    let daysBefore = moment(date) <  moment( new Date()).subtract(1,'day')
    currentReservations?.every( x => {
      let startDate = new Date(x.initDate)
      let endDate = new Date(x.finaltDate)

      if(date && endDate && startDate){
        bool =  moment(date) >= moment(startDate).add(1,'day').startOf('day') && moment(date) <= moment(endDate).add(1,'day').endOf('day')
      } 
      return !bool
    })
    return ( daysBefore || bool)
  }



  const disabledDate = (current) => {
    let bool
    let daysBefore 
    let today
    currentReservations?.every( x => {
      let init =  new Date(x.initDate)
      init.setHours(0, 0, 0, 0)
      let final =  new Date(x.finaltDate)
      final.setUTCHours(0, 0, 0, 0)
      let currentD = current.toDate();
      currentD.setUTCHours(0, 0, 0, 0)
      bool = current > moment( x.initDate) && (current < moment (x.finaltDate)  || final.getTime() == currentD.getTime()) 
      return !bool
    })
    //Disable days before today and disable timelapse not allowed to book for current day
    let todayZero = new Date()
      todayZero.setHours(0, 0, 0, 0)
      daysBefore = current.toDate() < todayZero
      let todayTwelve = new Date()
      todayTwelve.setHours(23,58,0,0)
      let todayLimit = new Date()
      todayLimit.setHours(18,0,0,0)
      today = todayLimit  < current.toDate() && current.toDate() < todayTwelve 
    return (today || daysBefore || bool)
  }

  return (
    <form
      className="w-full h-full grid bg-thirdColor bg-opacity-10"
      onSubmit={onSubmit}
    >
      <h2 onClick={() => console.log(currentReservations)} className="text-secundaryColor text-xl font-bold p-3">
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
          <Calendar tileDisabled = {disableCalendar}className="tablet:hidden w-full rounded-lg shadow-md border-none text-thirdColor bg-white brdrs p-10" />
          <Calendar
            tileDisabled={disableCalendar}
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
              className=" tablet:hidden prueba"

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
              
              <RangePicker

                className="hidden tablet:flex"
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
