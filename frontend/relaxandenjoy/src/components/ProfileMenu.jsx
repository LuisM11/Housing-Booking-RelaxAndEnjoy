import React, { useState } from "react";

const ProfileMenu = ({ user }) => {
  return (
    <article className="grid grid-rows-2 gap-2">
      <div className="text-right">
        <button className="w-12 h-12 bg-fourthColor rounded-full text-xl text-thirdColor font-bold">
          {user.name.charAt(0).toUpperCase()}
          {user.lastName.charAt(0).toUpperCase()}
        </button>
      </div>
      <div className="text-right">
        <p className="font-bold text-md text-fourthColor">Hola,</p>
        <p className="font-bold text-md text-secundaryColor">
          {user.name.charAt(0).toUpperCase() + user.name.slice(1)}{" "}
          {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
        </p>
      </div>
    </article>
  );
};

export default ProfileMenu;
