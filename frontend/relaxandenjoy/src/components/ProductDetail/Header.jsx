import React from "react";
import { Link } from "react-router-dom";

function Header({ product }) {
  return (
    <article className="w-full bg-mainColor flex justify-between items-center px-3 tablet:px-6 desktop:px-10 py-2">
      <aside>
        <p className="text-sm text-fourthColor tracking-widest">
          {product.category}
        </p>
        <h2 className="text-xl desktop:text-2xl font-bold text-fourthColor tracking-widest">
          {product.name}
        </h2>
      </aside>
      <Link to="/Home">
        <i className="uil uil-angle-left-b text-5xl font-bold text-fourthColor"></i>
      </Link>
    </article>
  );
}

export default Header;
