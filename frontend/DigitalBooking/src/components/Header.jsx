import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.png";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectMenu, setSelectMenu] = useState(0);

  return (
    <header className="p-3 shadow">
      <nav className="flex justify-between items-center">
        <Link to="/home">
          <img src={Logo} alt="" />
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
                onClick={() => setSelectMenu(1)}
              >
                Crear cuenta
              </Link>
              <Link
                to="/Login"
                className={
                  selectMenu == 2 ? "hidden" : "text-base text-secundaryColor"
                }
                onClick={() => setSelectMenu(2)}
              >
                Inciar sesión
              </Link>
            </div>
            <div className="text-2xl text-thirdColor flex gap-5 p-5">
              <a href="">
                <i className="uil uil-facebook"></i>
              </a>
              <a href="">
                <i className="uil uil-linkedin"></i>
              </a>
              <a href="">
                <i className="uil uil-twitter"></i>
              </a>
              <a href="">
                <i className="uil uil-instagram"></i>
              </a>
            </div>
          </div>
        </article>
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          <i className="uil uil-bars text-2xl text-mainColor"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
