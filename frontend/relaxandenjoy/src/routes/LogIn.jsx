import { Label } from "flowbite-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Swal from "sweetalert2";

function LogIn() {
  window.scrollTo(0, 70);
  const {
    setSelectMenu,
    setUser,
    logInFetch,
    user,
    reservationAttempt,
    setreservationAttempt,
  } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const login = async (email, password) => {
    const loginData = await logInFetch(email, password);
    if (loginData.status === 200) {
      const user = {
        ...loginData.data,
        Authorization: loginData.headers.authorization,
      };
      setUser(user);
      Swal.fire({
        icon: "success",
        title: "¡Se ha logueado con éxito!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oh no...",
        text: "Lamentablemente no ha podido iniciar sesión. Por favor, verifique sus datos o intente mas tarde",
        showConfirmButton: false,
        timer: 4000,
      });
    }
  };

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  useEffect(() => {
    if (reservationAttempt != 0 && user != null) {
      navigate(`/Reservation/${reservationAttempt}`);
      setreservationAttempt(0);
    } else if (user != null) {
      navigate("/Home");
    }
    return () => {};
  }, [user]);

  return (
    <section className="w-full h-full flex justify-center items-center bg-thirdColor bg-opacity-10">
      <article className="w-11/12 max-w-2xl h-[540px] flex flex-col justify-center items-center gap-5 my-[86px]">
        <h2 className="text-mainColor text-2xl tablet:text-3xl font-semibold text-center tablet:mb-4">
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
                <Label
                  htmlFor="email"
                  value="Correo electrónico"
                  className="tablet:text-base"
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
                  {errors.email.message}
                </p>
              )}
            </div>

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
                <p className="text-redWarning" role="alert">
                  {" "}
                  Máximo 25 caracteres
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <input
              type="submit"
              className="cursor-pointer  w-full tablet:w-1/2 py-2 bg-mainColor rounded-md tablet:text-lg text-fourthColor font-semibold mx-auto"
              value="Ingresar"
            />
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
