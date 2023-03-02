import React from "react";

function UploadImages({ images, setImages }) {
  const changeInput = (e) => {
    //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
    let indexImg;

    //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setImages(newImgsState);

    console.log(newImgsState);
  };

  const readmultifiles = (e, indexInicial) => {
    const files = e.currentTarget.files;

    //el array con las imagenes nuevas
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      //console.log(file);
      arrayImages.push({
        id: crypto.randomUUID(),
        index: indexInicial,
        name: file.name,
        url,
        file,
      });

      indexInicial++;
    });

    //despues de haber concluido el ciclo retornamos las nuevas imagenes
    return arrayImages;
  };

  const deleteImg = (index) => {
    //console.log("borrar img " + index);
    const newImgs = images.filter(function (element) {
      return element.index !== index;
    });
    console.log(newImgs);
    setImages(newImgs);
  };
  return (
    <article className="w-full grid gap-2 pt-5">
      <h3 className="text-base font-bold text-secundaryColor px-3 tablet:px-6 desktop:px-10 py-2">
        Cargar imágenes
      </h3>
      <div className="w-full grid gap-5 px-8">
        <label
          className={
            images.length > 0
              ? "hidden"
              : "flex justify-center items-center rounded-md bg-mainColor bg-opacity-40 w-full h-28 tablet:h-44 hover:bg-opacity-70 text-secundaryColor"
          }
        >
          <i className="fa-solid fa-file-arrow-up text-6xl"></i>
          <input
            type="file"
            name="images"
            id="images"
            className=""
            hidden
            multiple
            onChange={changeInput}
          />
        </label>

        <div
          className={
            images.length > 0
              ? "grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2"
              : "hidden"
          }
        >
          {images.map((image) => {
            return (
              <div
                key={image.id}
                className="w-full grid justify-center border-2 border-mainColor rounded-md gap-1 p-1 mx-auto"
              >
                <img
                  src={image.url}
                  alt=""
                  className="w-screen h-52 rounded-md"
                />
                <div
                  className="bg-redWarning text-fourthColor text-xl font-bold hover:bg-opacity-70 rounded-md flex justify-center items-center h-7"
                  onClick={deleteImg.bind(this, image.index)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default UploadImages;
