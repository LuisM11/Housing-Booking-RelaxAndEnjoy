import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

function SignIn() {
  const { setSelectMenu } = useGlobalContext();
  const { register, getValues, handleSubmit , formState:{ errors} } = useForm();
  

  const onSubmit = (data) => {
    console.log(data);

  };

  return (
    <section className="w-full h-full flex justify-center items-center">
      <article className="w-11/12 tablet:w-3/4 flex flex-col justify-center items-center gap-5 my-[86px]">
        <h2 onClick={ ()=> console.log(errors)} className="text-mainColor text-xl text-center">Crear cuenta</h2>
        <form
          action=""
          className="w-4/5 flex flex-col justify-center gap-10 text-xs"
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
              className={ (errors.firstName ? "border-2  border-redWarning" : "" )+ " h-10 shadow-sm rounded p-2"}
              {...register("firstName", {
                required: true,
                maxLength: 20,
                minLength: 2,
                message: ""
              })}
              /* aria-invalid={errors.firstName ? "true" : "false"}  */
            />
            {errors.firstName?.type === 'required' && <p className="text-redWarning" role="alert"> El nombre es requerido</p>}
            {errors.firstName?.type === 'minLength' && <p className="text-redWarning" role="alert"> Mínimo 2 caracteres</p>}
            {errors.firstName?.type === 'maxLength' && <p className="text-redWarning" role="alert"> Máximo 20 caracteres</p>}

            <label htmlFor="lastName" className="text-xs text-secundaryColor">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={(errors.lastName ? "border-2  border-redWarning" : "" )+ " h-10 shadow-sm rounded p-2"}
              {...register("lastName", {
                required: true,
                maxLength: 20,
                minLength: 2,
              })}
            />
            {errors.lastName?.type === 'required' && <p className="text-redWarning" role="alert"> El apellido es requerido</p>}
            {errors.lastName?.type === 'minLength' && <p className="text-redWarning" role="alert"> Mínimo 2 caracteres</p>}
            {errors.lastName?.type === 'maxLength' && <p className="text-redWarning" role="alert"> Máximo 2 caracteres</p>}


            <label htmlFor="email" className="text-xs text-secundaryColor">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={(errors.email ? "border-2  border-redWarning" : "" )+ " h-10 shadow-sm rounded p-2"}
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
            {errors.email?.type === 'required' && <p className="text-redWarning" role="alert"> El correo es requerido</p>}
            {errors.email?.type === 'pattern' && <p className="text-redWarning" role="alert"> Escriba un correo válido</p>}


            <label htmlFor="password" className="text-xs text-secundaryColor">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={(errors.password ? "border-2  border-redWarning" : "" )+ " h-10 shadow-sm rounded p-2"}
              {...register("password", {
                required: true,
                maxLength: 25,
                minLength: 6,
              })}
            />
            {errors.password?.type === 'required' && <p className="text-redWarning" role="alert"> La contraseña es requerida</p>}
            {errors.password?.type === 'minLength' && <p className="text-redWarning" role="alert"> Mínimo 6 caracteres</p>}
            {errors.password?.type === 'maxLength' && <p className="text-redWarning" role="alert"> Máximo 25 caracteres</p>}



            <label
              htmlFor="confirmPassword"
              className="text-xs text-secundaryColor"
            >
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className={(errors.confirmPassword ? "border-2  border-redWarning" : "" )+ " h-10 shadow-sm rounded p-2"}
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
            {errors.confirmPassword?.type && <p className="text-redWarning" role="alert"> Las contraseñas no coinciden </p>}


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
