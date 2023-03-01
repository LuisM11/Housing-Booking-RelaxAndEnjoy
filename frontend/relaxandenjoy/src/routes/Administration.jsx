import React, { useState } from "react";
import { Link } from "react-router-dom";

function Administration() {
  const [images, setImages] = useState([]);

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
    <div>
      <section className="w-full bg-thirdColor flex justify-between items-center px-3 tablet:px-6 desktop:px-10 py-2 shadow-lg">
        <aside>
          <h2 className="text-xl desktop:text-2xl font-bold text-fourthColor tracking-widest">
            Administración
          </h2>
        </aside>
        <Link to="/Home">
          <i className="uil uil-angle-left-b text-5xl font-bold text-fourthColor"></i>
        </Link>
      </section>
      <section className="w-full bg-thirdColor bg-opacity-10 flex flex-col justify-center items-start">
        <h2 className="text-xl font-bold text-secundaryColor px-3 tablet:px-6 desktop:px-10 py-5 shadow-md tablet:shadow-none">
          Crear propiedad
        </h2>
        <form
          action=""
          className="w-full bg-white pb-5 mb-5 tablet:w-11/12 tablet:mx-8 tablet:rounded-xl"
        >
          <article className="w-full px-8 pt-5">
            <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-5">
              <div className="grid gap-2 my-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-secundaryColor"
                >
                  Nombre de la propiedad
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre completo"
                  className="rounded-md shadow-md h-10"
                />
              </div>
              <div className="grid gap-2 my-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-secundaryColor"
                >
                  Categoría
                </label>
                <select
                  name="categories"
                  id="categories"
                  className="rounded-md shadow-md h-10"
                >
                  <option value="">Hotel</option>
                  <option value="">Camping</option>
                  <option value="">Hostal</option>
                  <option value="">Finca</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-5">
              <div className="grid gap-2 my-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-secundaryColor"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Cl 00 # 00 - 00"
                  className="rounded-md shadow-md h-10"
                />
              </div>
              <div className="grid gap-2 my-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-secundaryColor"
                >
                  Ciudad
                </label>
                <select
                  name="ciudad"
                  id="ciudad"
                  className="rounded-md shadow-md h-10"
                >
                  <option value="">Buenos Aires</option>
                  <option value="">Medellin</option>
                  <option value="">Etc</option>
                  <option value="">Etc 2</option>
                </select>
              </div>
            </div>
            <div className="grid gap-2 my-2">
              <label
                htmlFor=""
                className="text-xs font-medium text-secundaryColor"
              >
                Descripción
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="Escriba aqui"
                className="rounded-md shadow-md h-52 resize-none"
              />
            </div>
          </article>

          <article className="w-full grid gap-2 pt-5">
            <h3 className="text-base font-bold text-secundaryColor px-3 tablet:px-6 desktop:px-10 py-2">
              Agregar atributos
            </h3>
            <div className="w-full tablet:w-11/12 grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4 mx-auto bg-secundaryColor bg-opacity-10 px-8 py-4 pb-6 rounded-xl">
              <div className="flex gap-3 justify-center items-center">
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-xl font-bold text-secundaryColor">
                    IC
                  </span>
                  <span className="text-base text-secundaryColor">Nombre</span>
                </div>
                <select name="" id="" className="w-20 rounded-md">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10+</option>
                </select>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-xl font-bold text-secundaryColor">
                    IC
                  </span>
                  <span className="text-base text-secundaryColor">Nombre</span>
                </div>
                <select name="" id="" className="w-20 rounded-md">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10+</option>
                </select>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-xl font-bold text-secundaryColor">
                    IC
                  </span>
                  <span className="text-base text-secundaryColor">Nombre</span>
                </div>
                <select name="" id="" className="w-20 rounded-md">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10+</option>
                </select>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-xl font-bold text-secundaryColor">
                    IC
                  </span>
                  <span className="text-base text-secundaryColor">Nombre</span>
                </div>
                <select name="" id="" className="w-20 rounded-md">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10+</option>
                </select>
              </div>
            </div>
            <div className="w-full tablet:w-11/12 mx-auto bg-secundaryColor bg-opacity-10 px-8 py-4 pb-6 rounded-xl">
              <div className="w-full flex justify-around items-center gap-5">
                <div className="w-4/5 grid grid-cols-1 desktop:grid-cols-2 gap-5">
                  <div className="grid gap-2">
                    <label htmlFor="" className="text-secundaryColor text-sm">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Wifi"
                      className="rounded-md shadow-md h-10"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="" className="text-secundaryColor text-sm">
                      Icono
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="fa-wifi"
                      className="rounded-md shadow-md h-10"
                    />
                  </div>
                </div>
                <button className="w-10 h-10 flex justify-center items-center text-3xl font-bold rounded-md bg-mainColor text-fourthColor hover:bg-opacity-70 shadow-md">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </article>

          <article className="w-full grid gap-2 pt-5">
            <h3 className="text-base font-bold text-secundaryColor px-3 tablet:px-6 desktop:px-10 py-2">
              Políticas de la propiedad
            </h3>
            <div className="grid grid-cols-1 desktop:grid-cols-3 desktop:border rounded-lg desktop:mx-auto gap-5 desktop:w-11/12 px-8 desktop:py-4">
              <div className="grid gap-2">
                <h3 className="text-md font-bold text-secundaryColor">
                  Normas de la casa
                </h3>
                <div className="grid gap-1">
                  <label htmlFor="" className="text-sm text-secundaryColor">
                    Descripción
                  </label>
                  <textarea
                    name="houseRules"
                    id="houseRules"
                    cols="30"
                    rows="10"
                    placeholder="Escriba aqui"
                    className="rounded-md shadow-md h-52 resize-none"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-md font-bold text-secundaryColor py-1">
                  Salud y seguridad
                </h3>
                <div className="grid gap-1">
                  <label htmlFor="" className="text-sm text-secundaryColor">
                    Descripción
                  </label>
                  <textarea
                    name=" healthAndSafety"
                    id="healthAndSafety"
                    cols="30"
                    rows="10"
                    placeholder="Escriba aqui"
                    className="rounded-md shadow-md h-52 resize-none"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-md font-bold text-secundaryColor py-1">
                  Política de cancelación
                </h3>
                <div className="grid gap-1">
                  <label htmlFor="" className="text-sm text-secundaryColor">
                    Descripción
                  </label>
                  <textarea
                    name="cancellationPolicy"
                    id="cancellationPolicy"
                    cols="30"
                    rows="10"
                    placeholder="Escriba aqui"
                    className="rounded-md shadow-md h-52 resize-none"
                  />
                </div>
              </div>
            </div>
          </article>

          <article className="w-full grid gap-2 pt-5">
            <h3 className="text-base font-bold text-secundaryColor px-3 tablet:px-6 desktop:px-10 py-2">
              Cargar imágenes
            </h3>
            <div className="w-full grid gap-5 px-8">
              <label className="flex justify-center items-center rounded-md bg-mainColor bg-opacity-40 w-full h-28 tablet:h-44 hover:bg-opacity-70 text-secundaryColor">
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

              <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2">
                {images.map((image) => {
                  return (
                    <div className="w-full grid justify-center border-2 border-mainColor rounded-md gap-1 p-1 mx-auto">
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

          <article className="w-ful px-8 pt-10 pb-5 flex justify-center items-center">
            <button className="w-80 tablet:w-96 h-12 tablet:h-16 bg-thirdColor rounded-md text-2xl text-white font-medium hover:bg-opacity-90">
              Crear
            </button>
          </article>
        </form>
      </section>
    </div>
  );
}

export default Administration;
