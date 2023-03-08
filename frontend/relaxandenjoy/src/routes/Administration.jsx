import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import FeatureCard from "../components/Administration/FeatureCard";
import UploadImages from "../components/Administration/UploadImages";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

function Administration() {
  const { user, CategoriesList, getCitiesList, getFeaturesList } = useGlobalContext();
  const navigate = useNavigate();

  const [features, setFeatures] = useState([]);
  const [images, setImages] = useState([]);

  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const [cities, setcities] = useState([])

  const [fetchFeatures, setFetchFeatures] = useState([])
  const [uniquefetchFeatures, setUniqueFetchFeatures] = useState([])

  const {
    control,
    setValue,
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user === null) {
      navigate("/Login");
    } else {
      (async () => {
        setcities(await getCitiesList())
        const featuresRes = await getFeaturesList()
        setFetchFeatures(featuresRes)
        setUniqueFetchFeatures(getUniqueFeatures(featuresRes))
      })(
      )
    }
  }, []);

  const onSubmit = (data) => {
    const featuresList = []
    const newFeaturesList = []
    for (let feature of uniquefetchFeatures) {
      if (["Habitacion", "Baño"].includes(feature.name)) { // Specific cases for rooms and baths since they're not checkbox
        if (fetchFeatures.some(f => f.quantity == data[feature.name] && f.name == feature.name)) { //check if there is an existent entry with that quantity
          featuresList.push(feature.id)
        } else {
          const clonedFeature = structuredClone(feature)  //'feature' object serves as basis to create new object which will be send in the request
          delete clonedFeature.id           //id will be setted in the backend 
          clonedFeature.quantity = data[feature.name] == 0 ? null: data[feature.name]   //setting quantity specified in the form
          newFeaturesList.push(clonedFeature)
        }
      }
      else if (data[feature.name] === true) {
        featuresList.push(feature.id) // adding  checkbox's features with value equal to true
      }
      delete data[feature.name]
    }
    /* console.log(featuresList)
    console.log(newFeaturesList);
    console.log(features) */

    data = {...data, feature:featuresList,newFeature:[...newFeaturesList,...features]} //Adapting data object to DTO: union of newfeatures and  features as both of them have new entries
    const imagesList = structuredClone(data.images)
    delete data.images

    data.category = parseInt(data.category)
    data.city = parseInt(data.city)
    data.popularity = parseFloat(data.popularity)
    

    requestNewProduct(data,imagesList)

    setFeatures([]);
    setImages([]);
    /* reset(); */
  };

  const requestNewProduct = (productDTO,imagesList) => {
    let formData = new FormData();
    formData.append('product', new Blob ([JSON.stringify(productDTO)],{type: 'application/json'}))
    imagesList.forEach(i => {
      formData.append('files',i)
    })
    console.log(formData.getAll('files'))
    console.log(formData.get('product'))
    axios
            .post('http://localhost:8080/products', //3.145.6.239
              formData
              , {
                withCredentials: false,
                headers: {
                  'Content-Type': 'multipart/form-data',
                  
                },
                mode: 'cors'
              }
            ).then(res => {
              console.log(res)
              return res
            }).catch(e => {
              console.log(e)
            })

  }

  const getUniqueFeatures = (array) => {
    const seen = []
    const uniques = array.filter(x => {
      if (!seen.includes(x.name)) {
        seen.push(x.name)
        return true
      }
      return false

    })
    let reubication = uniques.splice(-3, 1)
    uniques.unshift(reubication[0]) // bath to second place
    reubication = uniques.splice(-3, 1)
    uniques.unshift(reubication[0]) // rooms to first place


    return uniques
  }

  function handleChangeNameFeatures(e) {
    setName(e.target.value);
  }

  function handleChangeIconFeatures(e) {
    setIcon(e.target.value);
  }

  function handleSubmitFeatures(e) {
    e.preventDefault();
    const newToDo = {
      /* id: crypto.randomUUID(), */
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
                  placeholder=" Hotel Sabana"
                  className="rounded-md shadow-customI border-none h-10"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                    minLength: 5,
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
                  defaultValue=""
                  className="rounded-md shadow-customI border-none h-10"
                  {...register("category", {
                    required: true,
                  })}
                >
                  <option
                    value=""
                    disabled={true}
                    className="disabled:text-secundaryColor/70 text-xs"
                  > </option>
                  {CategoriesList?.map((c) => (
                    <option key={c.id} value={parseInt(c.id)}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-5">
              <div className="grid gap-2 my-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-secundaryColor"
                >
                  Lugar
                </label>
                <input
                  type="text"
                  name="location"

                  placeholder=" Medellin, Antioquia, barrio Conquistadores a 1km del centro"
                  className="rounded-md shadow-customI border-none h-10 "
                  {...register("location", {
                    required: true,
                    maxLength: 200,
                    minLength: 3,
                  })}
                />
              </div>
              <div className="grid gap-2 my-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-secundaryColor"
                >
                  Popularidad
                </label>
                <input
                  type="number"
                  name="popularity"
                  step="0.1"
                  placeholder=" 4,5"
                  className="rounded-md shadow-customI border-none h-10"
                  {...register("popularity", {
                    required: true,
                    max: 5,
                    min: 0,
                  })}

                />
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
                  placeholder=" Cll 00 # 00 - 00"
                  className="rounded-md shadow-customI border-none h-10"
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
                  defaultValue={""}
                  className="rounded-md shadow-customI border-none h-10"
                  {...register("city", {
                    required: true,
                  })}
                >
                  <option
                    value=""
                    disabled={true}
                    className="disabled:text-secundaryColor/70 text-xs"
                  > </option>
                  {cities?.map((c) => (
                    <option key={c.id} value={parseInt(c.id)}>
                      {c.name}
                    </option>
                  ))}
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
                className="rounded-md shadow-customI border-none h-10"
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
                className="rounded-md shadow-customI border-none h-52 resize-none min-w-0"
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
            <div className="w-full grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 gap-3 bg-secundaryColor bg-opacity-10 px-8 py-4 pb-6 rounded-xl">
              {uniquefetchFeatures.map(feature => {
                if (feature["name"] == "Habitacion" || feature["name"] == "Baño") {
                  return (
                    <div key={feature.id} className="flex gap-3 justify-between tablet:justify-start items-center h-9 tablet:pl-[30%]">
                      <div className="flex gap-1 justify-center items-center tablet:order-1">
                        <i className={"text-xl font-bold text-secundaryColor " + feature.icon}></i>
                        <span className="text-base text-secundaryColor">
                          {feature.name == "Habitacion" ? "Habitaciones" : "Baños"}
                        </span>
                      </div>
                      <input
                        type="number"
                        name={feature.name}
                        id={feature.name}
                        className="w-1/4 min-w-[75px] max-w-[95px] h-3/4 rounded border-none shadow  px-4"
                        {...register(feature.name, {
                          required: true,
                          min: 0,
                          max: 30
                        })}
                      />
                    </div>
                  )
                } else {
                  return (
                    <div key={feature.id} className="flex gap-3 justify-between tablet:justify-start items-center h-9 tablet:pl-[30%]">
                      <div className="flex gap-1 justify-center items-center tablet:order-1">
                        <i className={"text-xl font-bold text-secundaryColor " + feature.icon}></i>
                        <label htmlFor={feature.name} className="text-base text-secundaryColor">
                          {feature.name}
                        </label>
                      </div>
                      <input
                        type="checkbox"
                        name={feature.name}
                        id={feature.name}
                        className="hover:cursor-pointer border-none rounded text-center shadow"
                        {...register(feature.name, {
                          min: 0,
                          max: 30
                        })}
                      />
                    </div>
                  )
                }
              })}
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
                      placeholder=" Wifi"
                      className="rounded-md shadow border-none h-10"
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
                      className="rounded-md shadow border-none h-10"
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
                    name="rules"
                    id="rules"

                    placeholder="Escriba aqui"
                    className="rounded-md shadow-customI border-none w-full h-52 resize-none"
                    {...register("rules", {
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

                    placeholder="Escriba aqui"
                    className="rounded-md shadow-customI border-none w-full h-52 resize-none"
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
                    name="politics"
                    id="politics"

                    placeholder="Escriba aqui"
                    className="rounded-md shadow-customI border-none w-full h-52 resize-none"
                    {...register("politics", {
                      required: true,
                      maxLength: 500,
                      minLength: 8,
                    })}
                  />
                </div>
              </div>
            </div>
          </article>

          <UploadImages setValue={setValue} control={control} images={images} setImages={setImages} />
          {(errors.images) && (
            <p className="text-redWarning text-xs tablet:text-sm text-center">
              Suba minimo cinco imagenes para cargar el producto
            </p>
          )}

          <article onClick={() => console.log(errors)} className="w-ful px-8 pt-10 pb-5 flex justify-center items-center">
            <button
              type="submit"
              className="w-80 tablet:w-96 h-12 tablet:h-16 bg-thirdColor rounded-md text-2xl text-white font-medium hover:bg-opacity-90"
            >
              Crear
            </button>
          </article>
        </form>
        <button onClick={() => {
          let formData = new FormData();
          const files = images.map(x => x.file)
          formData.append('files', files[0])
          formData.append('files', files[1])
          console.log(formData.getAll('files'), files)
          axios
            .post('http://localhost:8080/s3Imgs', //3.145.6.239
              formData
              , {
                withCredentials: false,
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                mode: 'cors'
              }
            ).then(res => {
              console.log(res)
              return res
            }).catch(e => {
              console.log(e)
            })
        }}>a</button>
      </section>
    </div>
  );
}

export default Administration;
