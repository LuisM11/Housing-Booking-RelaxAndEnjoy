import React, { useState } from "react";
import { Carousel } from "flowbite-react";

function Gallery({ images }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <section>
      <article
        className="w-full hidden grid-cols-4 grid-rows-2 gap-2 desktop:grid desktop:px-10 mx-auto cursor-pointer"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <img
        key={images[0]?.id}
          src={images[0]?.url}
          className="w-full h-96 col-span-2 row-span-2 desktop:rounded-lg"
        />
        {images.slice(1, 5).map((image) => {
          return (
            <img
              key={image.id}
              src={image.url}
              className="w-full h-[190px] desktop:rounded-lg"
            />
          );
        })}
      </article>

      <div className="h-60 tablet:h-128 w-full desktop:hidden">
        <Carousel>
          {images?.map((image) => (
            <img src={image?.url} alt="..." />
          ))}
        </Carousel>
      </div>

      <article
        className={
          toggleMenu
            ? "duration-700 flex flex-col justify-start items-center h-screen fixed z-10 -bottom-[100%] top-0 right-0 left-0 w-screen bg-fourthColor bg-opacity-95 gap-10"
            : "hidden"
        }
      >
        <div className="h-24 w-full flex flex-col justify-between px-5 pt-5 pb-2">
          <i
            className="uil uil-times text-6xl text-mainColor"
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        </div>
        <div className="h-[600px] w-3/4 p-10">
          <Carousel>
            {images?.map((image) => (
              <img src={image?.url} alt="..." />
            ))}
          </Carousel>
        </div>
      </article>
    </section>
  );
}

export default Gallery;
