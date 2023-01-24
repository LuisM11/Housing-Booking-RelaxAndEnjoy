import React from "react";
import { Link } from "react-router-dom";

const ProfileDesktop = ({ user, setSelectMenu, setUser }) => {
  return (
    <article className="flex justify-center items-center gap-5">
      <button className="w-10 h-10 bg-secundaryColor rounded-full text-xl text-fourthColor font-bold">
        {user.name.charAt(0).toUpperCase()}
        {user.lastName.charAt(0).toUpperCase()}
      </button>
      <div className="">
        <p className="font-bold text-md text-right text-thirdColor">Hola,</p>
        <p className="font-bold text-md text-mainColor">
          {user.name.charAt(0).toUpperCase() + user.name.slice(1)}{" "}
          {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
        </p>
      </div>
      <Link
        to="/home"
        className="text-4xl text-center text-[#6b1d1d] hover:text-[#b23b3b] my-1"
        onClick={() => {
          setSelectMenu(0);
          setUser(null);
        }}
      >
        <i className="uil uil-signout"></i>
      </Link>
    </article>
  );
};

export default ProfileDesktop;
