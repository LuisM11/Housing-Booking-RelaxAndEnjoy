import React from "react";

function Gallery({product, images}) {
  return (
    <article className="grid grid-cols-4 grid-rows-2 gap-1">
      <img
        src={product.crimg}
        className="w-[640px] h-96 col-span-2 row-span-2 desktop:rounded-lg"
      />
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image.url}
            className="w-80 h-[190px] desktop:rounded-lg"
          />
        );
      })}
    </article>
  );
}

export default Gallery;
