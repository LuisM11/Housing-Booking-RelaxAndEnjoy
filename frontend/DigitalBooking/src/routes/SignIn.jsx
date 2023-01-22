import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

function SignIn() {
  const { setSelectMenu } = useGlobalContext();
  return (
    <section className="w-full h-full flex justify-center items-center">
      <article className="w-11/12 tablet:w-3/4 flex flex-col justify-center items-center gap-5 my-[86px]">
        <h2 className="text-mainColor text-xl text-center">Crear cuenta</h2>
        <form action="" className="w-4/5 flex flex-col justify-center gap-10">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-xs text-secundaryColor">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-10 shadow-sm rounded p-2"
            />
            <label htmlFor="lastName" className="text-xs text-secundaryColor">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="h-10 shadow-sm rounded p-2"
            />
            <label htmlFor="email" className="text-xs text-secundaryColor">
              Correo electrónico
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="h-10 shadow-sm rounded p-2"
            />
            <label htmlFor="password" className="text-xs text-secundaryColor">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="h-10 shadow-sm rounded p-2"
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
