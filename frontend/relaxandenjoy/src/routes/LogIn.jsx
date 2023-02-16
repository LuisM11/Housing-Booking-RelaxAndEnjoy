import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

import User from "../data/User.json";

function LogIn() {
  const { setSelectMenu, setUser } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      <article className="w-11/12 max-w-2xl h-[540px] flex flex-col justify-center items-center gap-5 my-[86px]">
        <h2
          onClick={() => console.log(errors)}
          className="text-mainColor text-xl text-center mb-2"
        >
          Iniciar sesión
        </h2>
        <form
          action=""
          className="w-4/5 flex flex-col justify-center gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Correo electrónico" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="h-10 w-full shadow-sm rounded p-2"
                {...register("email", {
                  required: true,
                  validate: (value) => {
                    const email = User[0]["email"];
                    return email === value;
                  },
                })}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Contraseña" />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="h-10 w-full shadow-sm rounded p-2"
                {...register("password", {
                  required: true,
                  validate: (value) => {
                    const password = User[0].password;
                    return password === value;
                  },
                })}
              />
            </div>
          </div>

          {(errors.email || errors.password) && (
            <p className="text-redWarning" role="alert">
              Por favor vuelva a intentarlo, sus credenciales son inválidas
            </p>
          )}

          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Recuérdame</Label>
          </div>

          <div className="w-full flex flex-col gap-2">
            <Button
              type="submit"
              color=""
              className={
                (errors.password ? "border-2  border-redWarning" : "") +
                "w-full h-10 bg-mainColor rounded-md text-sm text-fourthColor font-bold"
              }
            >
              Ingresar
            </Button>
            <p className="text-xs text-center">
              ¿Aún no tenes cuenta?{" "}
              <Link
                to="/SignUp"
                className="text-mainColor"
                onClick={() => setSelectMenu(1)}
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
