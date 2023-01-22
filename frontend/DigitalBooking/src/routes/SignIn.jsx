import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

function SignIn() {
  const { setSelectMenu } = useGlobalContext();
  const { register, getValues, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="w-full h-full flex justify-center items-center">
      <article className="w-11/12 tablet:w-3/4 flex flex-col justify-center items-center gap-5 my-[86px]">
        <h2 className="text-mainColor text-xl text-center">Crear cuenta</h2>
        <form
          action=""
          className="w-4/5 flex flex-col justify-center gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-xs text-secundaryColor">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-10 shadow-sm rounded p-2"
              {...register("name", {
                required: "true",
                maxLength: 20,
                minLength: 2,
              })}
            />
            <label htmlFor="lastName" className="text-xs text-secundaryColor">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="h-10 shadow-sm rounded p-2"
              {...register("lastName", {
                required: true,
                maxLength: 20,
                minLength: 2,
              })}
            />
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
            <label
              htmlFor="confirmPassword"
              className="text-xs text-secundaryColor"
            >
              Confirmar constraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="h-10 shadow-sm rounded p-2"
              {...register("confirmPassword", {
                required: true,
                maxLength: 25,
                minLength: 6,
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "¡Las contraseñas deben coincidir!";
                },
              })}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <button
              type="submit"
              className="w-full h-10 bg-mainColor rounded-md text-sm text-fourthColor font-bold"
            >
              Crear cuenta
            </button>
            <p className="text-xs text-center">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/Login"
                className="text-mainColor"
                onClick={() => setSelectMenu(2)}
              >
                Iniciar sesión
              </Link>
            </p>
          </div>
        </form>
      </article>
    </section>
  );
}

export default SignIn;
