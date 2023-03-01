import { Button, Checkbox, Label } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { logInFetch } from "../context/authUtils";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
  const { setSelectMenu, registerFetch, setUser, user } = useGlobalContext();
  const navigate = useNavigate();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signup = useCallback(async (data) => {
    const registerData = await registerFetch(data);
    registerData.status == 201 &&
      Swal.fire({
        icon: "success",
        title: "¡Usuario registrado con éxito!",
        showConfirmButton: false,
        timer: 1500,
      });
    registerData.status !== 201 &&
      Swal.fire({
        icon: "error",
        title: "Oh no...",
        text: "Lamentablemente no ha podido registrarse. Por favor, intente más tarde",
        showConfirmButton: false,
        timer: 2000,
      });
    if (registerData.status === 201) {
      const loginData = await logInFetch(data.email, data.password);
      const user = {
        ...loginData.data,
        Authorization: loginData.headers.authorization,
      };
      loginData.status === 200 && setUser(user);
    }
  }, []);

  const onSubmit = (data) => {
    signup(data);
  };

  useEffect(() => {
    if (user != null) {
      navigate("/Home");
    }
  }, [user]);

  return (
    <section className="w-full h-full flex justify-center items-center bg-thirdColor bg-opacity-10">
      <article className="w-11/12 max-w-2xl flex flex-col justify-center items-center gap-5 my-14 tablet:my-[86px]">
        <h2 className="text-mainColor text-2xl tablet:text-3xl font-semibold text-center tablet:mb-4">
          Crear cuenta
        </h2>
        <form
          action=""
          className="w-4/5 flex flex-col justify-center gap-10 text-base"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col tablet:flex-row tablet:justify-between gap-4">
              <div className="w-full">
                <div className="">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="name"
                      value="Nombre"
                      className="tablet:text-base"
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={
                      "h-10 text-sm text-secundaryColor/70 tablet:text-base shadow rounded p-2 w-full mb-1 border-hidden" +
                      (errors.firstName
                        ? "- border-[1px] bg-redBg  border-redWarning"
                        : "")
                    }
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                      message: "",
                    })}
                  />
                  {errors.firstName?.type === "required" && (
                    <p
                      className="text-redWarning text-xs tablet:text-sm"
                      role="alert"
                    >
                      {" "}
                      El nombre es requerido
                    </p>
                  )}
                  {errors.firstName?.type === "minLength" && (
                    <p
                      className="text-redWarning text-xs tablet:text-sm"
                      role="alert"
                    >
                      {" "}
                      Mínimo 2 caracteres
                    </p>
                  )}
                  {errors.firstName?.type === "maxLength" && (
                    <p
                      className="text-redWarning text-xs tablet:text-sm"
                      role="alert"
                    >
                      {" "}
                      Máximo 20 caracteres
                    </p>
                  )}
                </div>
              </div>

              <div className="grid w-full">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="lastName"
                      value="Apellido"
                      className=" tablet:text-base"
                    />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={
                      "h-10 text-sm text-secundaryColor/70 tablet:text-base shadow rounded p-2 w-full mb-1 border-hidden" +
                      (errors.lastName
                        ? "- border-[1px] bg-redBg  border-redWarning"
                        : "")
                    }
                    {...register("lastName", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                    })}
                  />
                </div>
                {errors.lastName?.type === "required" && (
                  <p
                    className="text-redWarning text-xs tablet:text-sm"
                    role="alert"
                  >
                    {" "}
                    El apellido es requerido
                  </p>
                )}
                {errors.lastName?.type === "minLength" && (
                  <p
                    className="text-redWarning text-xs tablet:text-sm"
                    role="alert"
                  >
                    {" "}
                    Mínimo 2 caracteres
                  </p>
                )}
                {errors.lastName?.type === "maxLength" && (
                  <p
                    className="text-redWarning text-xs tablet:text-sm"
                    role="alert"
                  >
                    {" "}
                    Máximo 2 caracteres
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Correo electrónico "
                  className=" tablet:text-base"
                />
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className={
                  "h-10 text-sm text-secundaryColor/70 tablet:text-base shadow rounded p-2 w-full mb-1 border-hidden" +
                  (errors.email
                    ? "- border-[1px] bg-redBg  border-redWarning"
                    : "")
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
              {errors.email?.type === "required" && (
                <p
                  className="text-redWarning text-xs tablet:text-sm"
                  role="alert"
                >
                  {" "}
                  El correo es requerido
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p
                  className="text-redWarning text-xs tablet:text-sm"
                  role="alert"
                >
                  {" "}
                  Escriba un correo válido
                </p>
              )}
            </div>

            {/* <div>
              <div className="mb-2 block">
                <Label htmlFor="city" value="Ciudad" className="tablet:text-base"/>
              </div>
              <select             
              defaultValue={""}
                name="destinos"
                {...register("city")}
                className={
                  "h-10 text-sm text-secundaryColor/70 tablet:text-base shadow rounded p-2 w-full mb-1 border-hidden" +
                      (errors.city ? "- border-[1px] bg-redBg  border-redWarning" : "") 
                }
                {...register("city", {
                  required: true,
                  validate: (value) => {
                    return (
                      value !== "" || "color"
                    );
                  },
                })}
              >
                <option value={""} disabled className="disabled: text-xs">
                  ¿De dónde eres?
                </option>
                {city.map((c, index) => (
                  <option key={index} value={parseInt(c.id ) } >
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.city?.type === "required" && (
              <p className="text-redWarning text-xs tablet:text-sm" role="alert">
                {" "}
                El correo es requerido
              </p>
            )}
            </div> */}

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Contraseña"
                  className="tablet:text-base"
                />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className={
                  "h-10 text-sm text-secundaryColor/70 tablet:text-base shadow rounded p-2 w-full mb-1 border-hidden" +
                  (errors.password
                    ? "- border-[1px] bg-redBg  border-redWarning"
                    : "")
                }
                {...register("password", {
                  required: true,
                  maxLength: 25,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <p
                  className="text-redWarning text-xs tablet:text-sm"
                  role="alert"
                >
                  {" "}
                  La contraseña es requerida
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p
                  className="text-redWarning text-xs tablet:text-sm"
                  role="alert"
                >
                  {" "}
                  Mínimo 6 caracteres
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p
                  className="text-redWarning text-xs tablet:text-sm"
                  role="alert"
                >
                  {" "}
                  Máximo 25 caracteres
                </p>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="confirmPassword"
                  value="Confirmar contraseña"
                  className="tablet:text-base"
                />
              </div>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className={
                  "h-10 text-sm text-secundaryColor/70 tablet:text-base shadow rounded p-2 w-full mb-1 border-hidden" +
                  (errors.confirmPassword
                    ? "- border-[1px] bg-redBg  border-redWarning"
                    : "")
                }
                {...register("confirmPassword", {
                  required: true,
                  maxLength: 25,
                  minLength: 6,
                  validate: (value) => {
                    const { password } = getValues();
                    return (
                      password === value || "¡Las contraseñas deben coincidir!"
                    );
                  },
                })}
              />
              {errors.confirmPassword?.type && (
                <p
                  className="text-redWarning text-xs tablet:text-sm"
                  role="alert"
                >
                  {" "}
                  Las contraseñas no coinciden{" "}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="terms" {...register("terms", { required: true })} />

              <Label htmlFor="terms">
                Estoy de acuerdo con los{" "}
                <a
                  href=""
                  className="text-mainColor hover:underline dark:text-fourthColor"
                >
                  términos y condiciones.
                </a>
              </Label>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <input
              type="submit"
              className="cursor-pointer  w-full tablet:w-1/2 py-2 bg-mainColor rounded-md tablet:text-lg text-fourthColor font-semibold mx-auto"
              value="Crear cuenta"
            />

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

export default SignUp;
