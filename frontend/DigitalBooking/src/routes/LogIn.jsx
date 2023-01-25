import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

import User from "../data/User.json";

function LogIn() {
  const { setSelectMenu, setUser } = useGlobalContext();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    User.map((usr) => {
      if (usr.email === data.email) {
        if (usr.password === data.password) {
          setUser(usr);
          navigate("/home");
        }
      }
    });
  };

  return (
    <section className="w-full h-full flex justify-center items-center">
      <article className="w-11/12 tablet:w-3/4 h-[540px] flex flex-col justify-center items-center gap-5 my-[86px]">
        <h2 className="text-mainColor text-xl text-center">Iniciar sesión</h2>
        <form
          action=""
          className="w-4/5 flex flex-col justify-center gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-xs text-secundaryColor">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-10 shadow-sm rounded p-2"
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
            <label htmlFor="password" className="text-xs text-secundaryColor">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="h-10 shadow-sm rounded p-2"
              {...register("password", {
                required: true,
                maxLength: 25,
                minLength: 6,
              })}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <button
              type="submit"
              className="w-full h-10 bg-mainColor rounded-md text-sm text-fourthColor font-bold"
            >
              Registrate
            </Link>
          </p>
        </div>
      </form>
    </article>
  </section>
  );
}



export default LogIn;

