import React from "react";

function Footer() {
  return (
    <footer className="w-full h-14 bg-mainColor flex justify-center items-center">
      <article className="w-11/12 text-sm text-fourthColor">
        <div>
          <h2>2021 Digital Booking</h2>
        </div>
        <div className="hidden">
          <i class="uil uil-facebook"></i>
          <i class="uil uil-linkedin"></i>
          <i class="uil uil-twitter"></i>
          <i class="uil uil-instagram"></i>
        </div>
      </article>
    </footer>
  );
}

export default Footer;
