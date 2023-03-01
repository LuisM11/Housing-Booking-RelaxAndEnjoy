import React from "react";
import { Link } from "react-router-dom";

const ProfileDesktop = ({ user, setSelectMenu, setUser }) => {
  
  return (
    <article className="flex justify-center items-center gap-5">
      <button className="w-10 h-10 bg-secundaryColor rounded-full text-xl text-fourthColor font-bold">
        {user.fullname.split(" ")[0].charAt(0).toUpperCase()}
        {user.fullname.split(" ")[1].charAt(0).toUpperCase()}
      </button>
      <div className="">
        <p className="font-bold text-md text-right text-thirdColor">Hola,</p>
        <p className="font-bold text-md text-mainColor">
          {user.fullname.split(" ")[0].charAt(0).toUpperCase() + user.fullname.split(" ")[0].slice(1)}{" "}
          {user.fullname.split(" ")[1].charAt(0).toUpperCase() + user.fullname.split(" ")[1].slice(1)}
        </p>
      </div>
      <Link
        to="/Home"
        className="text-4xl text-center text-[#6b1d1d] hover:text-[#b23b3b] my-1"
        onClick={() => {
          setUser(null);
          setSelectMenu(0);
        }}
      >
        <i className="uil uil-signout"></i>
      </Link>
    </article>
  );
};

export default ProfileDesktop;
