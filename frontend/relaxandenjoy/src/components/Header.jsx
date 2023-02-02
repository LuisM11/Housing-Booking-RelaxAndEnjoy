import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../assets/ryd.png";

import ProfileMenu from "./ProfileMenu";
import ProfileDesktop from "./ProfileDesktop";

import { useGlobalContext } from "../context/GlobalContext";

function Header() {
  const { selectMenu, setSelectMenu, user, setUser } = useGlobalContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="p-3 tablet:p-4 tablet:px-6 desktop:px-10 shadow">
      <nav className="flex justify-between items-center">
        <Link
          to="/home"
          className="flex gap-1 items-end"
          onClick={() => setSelectMenu(0)}
        >
          <img src={Logo2} alt="Relájese y Disfrute" title="Relájese y Disfrute" className="w-14" />
          {/* <img src={Lema} alt="" className="hidden h-4 desktop:grid" /> */}
          <span className="text-sm text-thirdColor italic font-thin hidden desktop:grid" >El lugar para tu descanso y vacaciones</span>

        </Link>
        <aside
          className={
            toggleMenu
              ? "duration-700 flex flex-col h-screen fixed z-10 bottom-[-100%] right-0  w-3/4 bg-fourthColor top-0 desktop:hidden tablet:hidden"
              : "duration-200 flex flex-col h-screen fixed z-10 right-[-100%]  w-3/4 bg-fourthColor top-0 desktop:hidden tablet:hidden"
          }
        >
          <div className="h-52 bg-mainColor flex flex-col justify-between px-5 pt-5 pb-2">
            <i className="uil uil-times text-2xl text-fourthColor"
              onClick={() => setToggleMenu(!toggleMenu)}></i>
            {user === null ? (
              <h2 className="text-fourthColor text-right font-bold text-xl">
                MENÚ
              </h2>
            ) : (
              <ProfileMenu user={user} />
            )}
          </div>
          <div className="grow flex flex-col justify-between">
            <div className={user ? "hidden" : "flex flex-col gap-10 p-5"}>
              <Link
                to="/Signin"
                className={
                  selectMenu == 1
                    ? "hidden"
                    : "text-base text-secundaryColor text-right"
                }
                onClick={() => {
                  setSelectMenu(1);
                  setToggleMenu(false);
                }}
              >
                Crear cuenta
              </Link>
              
              <Link
                to="/Login"
                className={
                  selectMenu == 2
                    ? "hidden"
                    : "text-base text-secundaryColor text-right"
                }
                onClick={() => {
                  setSelectMenu(2);
                  setToggleMenu(false);
                }}
              >
                Inciar sesión
              </Link>
            </div>
            <div
              className={
                user
                  ? "h-full w-full flex flex-col justify-end"
                  : "w-full flex flex-col"
              }
            >
              <div className={user ? "flex-col mb-3" : "hidden"}>
                <p className="text-secundaryColor text-right text-sm py-1 pr-5">
                  ¿Deseas{" "}
                  <Link
                    to="/Home"
                    className="text-mainColor"
                    onClick={() => {
                      setUser(null);
                      setSelectMenu(0);
                    }}
                  >
                    cerrar sesión
                  </Link>
                  ?
                </p>
                <div className="w-[85%] mx-auto">
                  <hr className="text-thirdColor" />
                </div>
              </div>
              <div className="text-3xl text-thirdColor flex justify-end gap-5 py-3 pr-5">
                <a href="https://www.facebook.com" target="_blank">
                  <i className="uil uil-facebook"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <i className="uil uil-linkedin"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="uil uil-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <i className="uil uil-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </aside>
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          <i className="uil uil-bars text-2xl text-mainColor tablet:hidden"></i>
        </div>
        <div className="hidden tablet:flex">
          {user ? (
            <ProfileDesktop
              user={user}
              setUser={setUser}
              setSelectMenu={selectMenu}
            />
          ) : (
            <div className="flex gap-2">
              <Link
                to="/Signin"
                className={`h-8 desktop:h-9 w-32 desktop:w-40 border border-fourthColor-1 text-mainColor text-sm rounded shadow-2xl ${
                  selectMenu == 1
                    ? "hidden"
                    : "flex justify-center items-center"
                }`}
                onClick={() => setSelectMenu(1)}
              >
                Crear cuenta
              </Link>
              <Link
                to="/Login"
                className={`h-8 desktop:h-9 w-32 desktop:w-40 border border-fourthColor-1 text-mainColor text-sm rounded shadow-2xl ${
                  selectMenu == 2
                    ? "hidden"
                    : "flex justify-center items-center"
                }`}
                onClick={() => setSelectMenu(2)}
              >
                Inciar sesión
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
