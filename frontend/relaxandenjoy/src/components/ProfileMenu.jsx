import React, { useState } from "react";

const ProfileMenu = ({ user }) => {
  return (
    <article className="grid grid-rows-2 gap-2">
      <div className="text-right">
        <button className="w-12 h-12 bg-fourthColor rounded-full text-xl text-thirdColor font-bold">
        {user.fullname.split(" ")[0].charAt(0).toUpperCase()}
        {user.fullname.split(" ")[1].charAt(0).toUpperCase()}
        </button>
      </div>
      <div className="text-right">
        <p className="font-bold text-md text-fourthColor">Hola,</p>
        <p className="font-bold text-md text-secundaryColor">
        {user.fullname.split(" ")[0].charAt(0).toUpperCase() + user.fullname.split(" ")[0].slice(1)}{" "}
        {user.fullname.split(" ")[1].charAt(0).toUpperCase() + user.fullname.split(" ")[1].slice(1)}
        </p>
      </div>
    </article>
  );
};

export default ProfileMenu;
