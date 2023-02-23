import React,{useEffect} from "react";
import Calendar from "react-calendar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import Swal from "sweetalert2";
import { useState } from "react";
import moment from 'moment'

function Availability({ product }) {
  const {setreservationAttempt, getProductReservations,user} =useGlobalContext()
  const [currentReservations, setcurrentReservations] = useState([])
  const navigate = useNavigate()
  const param = useParams()

  const redirectReservation = () =>{
    if(user == null){
      Swal.fire({
        icon: 'warning',
        title: '¡Recuerda loguearte!',
        showConfirmButton: false,
        timer: 3000
      })
      navigate('/Login')
      setreservationAttempt(product?.id)
    }else{
      navigate(`/Reservation/${product.id}`)
    }
  }
  const reservationsFetch = async ()=>{
    const reservations = await getProductReservations(param.id)
    if(reservations.status == 200){

      setcurrentReservations(reservations.data)
    }
    /* console.log(product,"reservations") */
  }

  useEffect(() => {
    reservationsFetch()
  }, [])
  
  const disableDates = ({ date }) => {
    let bool
    currentReservations?.every( x => {
      console.log(date,new Date (x.finaltDate))
      bool = date >= new Date( x.initDate) && (date < new Date (x.finaltDate) || date.getTime() === new Date (x.finaltDate).getTime())
      return !bool
    })
    const daysBefore = date < new Date()  
    return daysBefore || bool
  }
 

  return (
    <section className="w-full bg-secundaryColor bg-opacity-10 px-3 tablet:px-6 desktop:px-10 py-4">
      <article className="w-full grid">
        <h2 className="text-2xl font-bold text-secundaryColor my-3">
          Fechas disponibles
        </h2>
        <div className="w-full flex flex-col desktop:flex-row desktop:items-center gap-5">
          <Calendar className="w-full grid tablet:hidden tablet:w-full desktop:w-[65%] rounded-b-lg desktop:rounded-lg shadow-md p-5 border-none text-thirdColor mx-auto" />
          <Calendar
          tileDisabled={disableDates}
            showDoubleView
            className="w-[420px] hidden tablet:grid tablet:w-full desktop:w-[65%] rounded-b-lg desktop:rounded-lg shadow-md p-5 border-none text-thirdColor"
          />

          <div className="desktop:w-[35%] desktop:h-32 desktop:bg-[#FFFFFF] rounded-lg desktop:shadow-md grid tablet:grid-cols-2 desktop:grid-cols-1 desktop:grid-rows-2 items-center p-5 gap-10 ">
            <p className="text-secundaryColor text-sm">
              Agregá tus fechas de viaje para obtener precios exactos.
            </p>
            <button
              onClick={redirectReservation}
              className="h-9 w-full bg-mainColor text-fourthColor flex justify-center items-center tablet:text-md rounded shadow-lg"
            >
              Iniciar reserva
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Availability;
