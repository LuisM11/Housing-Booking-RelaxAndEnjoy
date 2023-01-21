import React from "react";

function Footer() {
  return (
    <footer className="w-full h-14 bg-mainColor flex justify-center items-center">
      <article className="w-11/12 text-sm text-fourthColor tablet:flex tablet:justify-between">
        <div className="flex items-center">
          <h2 className="text-fourthColor text-mb">2021 Digital Booking</h2>
        </div>
        <div className="hidden gap-10 text-2xl text-fourthColor tablet:grid tablet:grid-cols-4">
          <i className="uil uil-facebook"></i>
          <i className="uil uil-linkedin"></i>
          <i className="uil uil-twitter"></i>
          <i className="uil uil-instagram"></i>
        </div>
      </article>
    </footer>
  );
}

export default Footer;
