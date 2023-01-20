import React from "react";
import Logo from "../assets/logo1.png";

function Header() {
  return (
    <header className="flex justify-between items-center p-3 shadow">
      <img src={Logo} alt="" />
      <i class="uil uil-bars text-2xl text-mainColor"></i>
    </header>
  );
}

export default Header;
