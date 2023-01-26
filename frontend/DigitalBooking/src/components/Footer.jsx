import React from "react";

function Footer() {
  return (
    <footer className="w-full h-14 bg-mainColor flex justify-center items-center">
      <article className="w-11/12 text-sm text-fourthColor tablet:flex tablet:justify-between">
        <div className="flex items-center">
          <h2 className="text-fourthColor text-mb">2023 Relájese y Disfrute</h2>
        </div>
        <div className="hidden gap-10 text-2xl text-fourthColor tablet:grid tablet:grid-cols-4">
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
      </article>
    </footer>
  );
}

export default Footer;
