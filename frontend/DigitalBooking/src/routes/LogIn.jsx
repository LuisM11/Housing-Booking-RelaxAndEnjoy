import React from "react";
import { Link } from "react-router-dom";

function LogIn({ setSelectMenu }) {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <article className="w-11/12 h-[540px] flex flex-col justify-center items-center gap-5 my-[80px]">
        <h2 className="text-mainColor text-xl text-center">Iniciar sesión</h2>
        <form action="" className="w-4/5 flex flex-col justify-center gap-10">
          <div className="flex flex-col gap-3">
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
          </div>
          <div className="w-full flex flex-col gap-2">
            <button
              type="submit"
              className="w-full h-10 bg-mainColor rounded-md text-sm text-fourthColor font-bold"
            >
              Ingresar
            </button>
            <p className="text-xs text-center">
              ¿Aún no tenes cuenta?{" "}
              <Link to="/Signin" className="text-mainColor" >
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
