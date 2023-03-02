import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import FeatureCard from "../components/Administration/FeatureCard";
import UploadImages from "../components/Administration/UploadImages";

import { useGlobalContext } from "../context/GlobalContext";

function Administration() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  const [features, setFeatures] = useState([]);
  const [images, setImages] = useState([]);

  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user === null) {
      navigate("/Login");
    }
  }, []);

  const onSubmit = (data) => {
    let newProduct = {
      title: data.title,
      name: data.name,
      popularity: 0,
      crimg: "",
      location: data.address,
      description: data.description,
      categories: data.category,
      city: data.city,
      features: {
        bathrooms: data.bathrooms,
        rooms: data.rooms,
        televisions: data.te,
        ...features,
      },
      images: images,
      policies: {
        houseRules: data.houseRules,
        healthAndSafety: data.healthAndSafety,
        safetyRules: data.healthAndSafety,
      },
    };

    Swal.fire({
      icon: "success",
      title: "Reservacion realizada con éxito!",
      showConfirmButton: false,
      timer: 5000,
    });

    console.log(newProduct);
    console.log(data);
    setFeatures([]);
    setImages([]);
    reset();
  };

  function handleChangeNameFeatures(e) {
    setName(e.target.value);
  }

  function handleChangeIconFeatures(e) {
    setIcon(e.target.value);
  }

  function handleSubmitFeatures(e) {
    e.preventDefault();
    const newToDo = {
      id: crypto.randomUUID(),
      name: name,
      icon: icon,
    };
    setFeatures([...features, newToDo]);
    setName("");
    setIcon("");
    setFeatures([...features, newToDo]);
    console.log(features);
  }

  function handleUpdateFeatures(id, value) {
    const temp = [...features];
    const item = temp.find((item) => item.id === id);
    item.name = value.name;
    item.icon = value.icon;
    setFeatures(temp);
  }

  function handleDeleteFeatures(id) {
    const temp = features.filter((item) => item.id !== id);
    setFeatures(temp);
  }

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
        <h2 className="text-2xl font-bold text-secundaryColor px-3 tablet:px-6 desktop:px-10 py-5 shadow-md tablet:shadow-none">
          Crear propiedad
        </h2>
        <form
          action=""
          className="w-full bg-white pb-5 mb-5 tablet:w-[97%] tablet:mx-auto tablet:rounded-xl"
          onSubmit={handleSubmit(onSubmit)}
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
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                    minLength: 8,
                  })}
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
                  name="category"
                  id="category"
                  className="rounded-md shadow-md h-10"
                  {...register("category", {
                    required: true,
                  })}
                >
                  <option value="Hotel">Hotel</option>
                  <option value="Camping">Camping</option>
                  <option value="Hostal">Hostal</option>
                  <option value="Finca">Finca</option>
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
                  {...register("address", {
                    required: true,
                    maxLength: 50,
                    minLength: 4,
                  })}
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
                  name="city"
                  id="city"
                  className="rounded-md shadow-md h-10"
                  {...register("city", {
                    required: true,
                  })}
                >
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Medellin">Medellin</option>
                  <option value="Etc">Etc</option>
                  <option value="Etc 2">Etc 2</option>
                </select>
              </div>
            </div>
            <div className="grid gap-2 my-2">
              <label
                htmlFor=""
                className="text-xs font-medium text-secundaryColor"
              >
                Titulo
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Lema, frase, etc."
                className="rounded-md shadow-md h-10"
                {...register("title", {
                  required: true,
                  maxLength: 150,
                  minLength: 4,
                })}
              />
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
                {...register("description", {
                  required: true,
                  maxLength: 500,
                  minLength: 10,
                })}
              />
            </div>
          </article>

          <article className="w-full grid gap-2 pt-5 px-3 tablet:px-6 desktop:px-10">
            <h3 className="text-xl font-bold text-secundaryColor py-2">
              Agregar atributos
            </h3>
            <div className="w-full grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4 bg-secundaryColor bg-opacity-10 px-8 py-4 pb-6 rounded-xl">
              <div className="flex gap-3 justify-center items-center">
                <div className="flex gap-1 justify-center items-center">
                  <i className="uil uil-bed-double text-xl font-bold text-secundaryColor"></i>
                  <span className="text-base text-secundaryColor">
                    Habitaciones
                  </span>
                </div>
                <select
                  name="rooms"
                  id="rooms"
                  className="w-20 rounded-md"
                  {...register("rooms", {
                    required: true,
                  })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <div className="flex gap-1 justify-center items-center">
                  <i className="uil uil-bath text-xl font-bold text-secundaryColor"></i>
                  <span className="text-base text-secundaryColor">Baños</span>
                </div>
                <select
                  name="bathrooms"
                  id="bathrooms"
                  className="w-20 rounded-md"
                  {...register("bathrooms", {
                    required: true,
                  })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <div className="flex gap-1 justify-center items-center">
                  <i className="uil uil-tv-retro text-xl font-bold text-secundaryColor"></i>
                  <span className="text-base text-secundaryColor">
                    Televisores
                  </span>
                </div>
                <select
                  name="televisions"
                  id="televisions"
                  className="w-20 rounded-md"
                  {...register("televisions", {
                    required: true,
                  })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center mx-auto bg-secundaryColor bg-opacity-10 px-4 pt-4 pb-6 rounded-xl gap-5">
              <div className="w-full flex justify-around items-center gap-2 tablet:gap-10">
                <div className="w-full grid grid-cols-1 desktop:grid-cols-2 gap-2 tablet:gap-5 ">
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
                      onChange={handleChangeNameFeatures}
                      value={name}
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
                      onChange={handleChangeIconFeatures}
                      value={icon}
                    />
                  </div>
                </div>
                <div className="w-20 h-20 flex justify-center items-center">
                  <button
                    type="submit"
                    className="w-10 h-10 flex justify-center items-center text-3xl font-bold rounded-md bg-mainColor text-fourthColor hover:bg-opacity-70 shadow-md"
                    onClick={handleSubmitFeatures}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="w-full grid gap-2">
                {features.map((item) => (
                  <FeatureCard
                    key={item.id}
                    item={item}
                    onUpdate={handleUpdateFeatures}
                    onDelete={handleDeleteFeatures}
                  />
                ))}
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
                    {...register("houseRules", {
                      required: true,
                      maxLength: 500,
                      minLength: 8,
                    })}
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
                    name="healthAndSafety"
                    id="healthAndSafety"
                    cols="30"
                    rows="10"
                    placeholder="Escriba aqui"
                    className="rounded-md shadow-md h-52 resize-none"
                    {...register("healthAndSafety", {
                      required: true,
                      maxLength: 500,
                      minLength: 8,
                    })}
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
                    {...register("cancellationPolicy", {
                      required: true,
                      maxLength: 500,
                      minLength: 8,
                    })}
                  />
                </div>
              </div>
            </div>
          </article>

          <UploadImages images={images} setImages={setImages} />

          <article className="w-ful px-8 pt-10 pb-5 flex justify-center items-center">
            <button
              type="submit"
              className="w-80 tablet:w-96 h-12 tablet:h-16 bg-thirdColor rounded-md text-2xl text-white font-medium hover:bg-opacity-90"
            >
              Crear
            </button>
          </article>
        </form>
      </section>
    </div>
  );
}

export default Administration;
