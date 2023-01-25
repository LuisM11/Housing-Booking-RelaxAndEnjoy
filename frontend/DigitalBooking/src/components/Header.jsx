import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/r&dlogo.png";
import Logo2 from "../assets/ryd.png";
import Lema from "../assets/lema.png";


import { useGlobalContext } from "../context/GlobalContext";

function Header() {
  const { selectMenu, setSelectMenu } = useGlobalContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="p-3 desktop:px-10 shadow">
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
        <article
          className={
            toggleMenu
              ? "fixed bottom-[-100%] left-0 w-full bg-fourthColor top-0"
              : "hidden"
          }
        >
          <div className="h-52 bg-mainColor flex flex-col justify-between px-5 pt-5 pb-2">
            <i
              className="uil uil-times text-2xl text-fourthColor"
              onClick={() => setToggleMenu(!toggleMenu)}
            ></i>
            <h2 className="text-fourthColor text-right font-bold text-xl">
              MENÚ
            </h2>
          </div>
          <div className="h-[625px] flex flex-col justify-between items-end ">
            <div className="flex flex-col gap-10 p-5">
              <Link
                to="/Signin"
                className={
                  selectMenu == 1 ? "hidden" : "text-base text-secundaryColor"
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
                  selectMenu == 2 ? "hidden" : "text-base text-secundaryColor"
                }
                onClick={() => {
                  setSelectMenu(2);
                  setToggleMenu(false);
                }}
              >
                Inciar sesión
              </Link>
            </div>
            <div className="text-2xl text-thirdColor flex gap-5 p-5">
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
        </article>
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          <i className="uil uil-bars text-2xl text-mainColor tablet:hidden"></i>
        </div>
        <div className="hidden tablet:flex gap-2">
          <Link
            to="/Signin"
            className={`h-9 w-40 border border-fourthColor-1 text-mainColor text-sm rounded shadow-2xl ${selectMenu == 1 ? "hidden" : "flex justify-center items-center"
              }`}
            onClick={() => setSelectMenu(1)}
          >
            Crear cuenta
          </Link>
          <Link
            to="/Login"
            className={`h-9 w-40 border border-fourthColor-1 text-mainColor text-sm rounded shadow-2xl ${selectMenu == 2 ? "hidden" : "flex justify-center items-center"
              }`}
            onClick={() => setSelectMenu(2)}
          >
            Inciar sesión
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
