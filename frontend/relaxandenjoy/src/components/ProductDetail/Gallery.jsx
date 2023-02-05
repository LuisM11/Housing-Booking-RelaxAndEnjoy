import React from "react";

function Gallery({product, images}) {
  return (
    <article className="w-full grid grid-cols-4 grid-rows-2 gap-2 desktop:px-10 mx-auto">
      <img
        src={product.crimg}
        className="w-full h-96 col-span-2 row-span-2 desktop:rounded-lg"
      />
      {images.slice(0, 4).map((image, index) => {
        return (
          <img
            key={index}
            src={image.url}
            className="w-full h-[190px] desktop:rounded-lg"
          />
        );
      })}
    </article>
  );
}

export default Gallery;
