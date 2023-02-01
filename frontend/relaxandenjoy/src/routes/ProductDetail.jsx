import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Product from "../data/Recommendations.json";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [features, setFeatures] = useState([]);

  const [standards, setStandards] = useState([]);
  const [safety, setSafety] = useState([]);
  const [cancellation, setCancellation] = useState([]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const pd = Product.find((product) => product.id === id);
    setProduct(pd);
    setFeatures(pd.features);

    setStandards(pd.policies.standards);
    setSafety(pd.policies.safety);
    setCancellation(pd.policies.cancellation);
    setImages(pd.images);
  }, []);
  return (
    <section className="w-full h-full">
      <article className="w-full bg-mainColor flex justify-between items-center px-10 py-2">
        <aside>
          <p className="text-sm text-fourthColor font-bold tracking-widest">
            {product.category}
          </p>
          <h2 className="text-3xl font-bold text-fourthColor tracking-widest">{product.title}</h2>
        </aside>
        <i className="uil uil-angle-left-b text-6xl font-bold text-fourthColor"></i>
      </article>

      <article className="w-full bg-secundaryColor bg-opacity-10 flex justify-between items-center px-10 py-2">
        <aside>
          <i className="uil uil-map-marker text-thirdColor"></i>{" "}
          <span className="text-secundaryColor">{product.location}</span>
        </aside>
        <aside className="flex justify-center items-center gap-3">
          <div className="text-right">
            <p className="text-secundaryColor text-xs text-right">Muy bueno</p>
            <span
              className={
                product.popularity < 3
                  ? "text-md text-[#b23b3b]"
                  : "text-md text-[#10771A]"
              }
            >
              <i className="uil uil-favorite"></i>
              {product.popularity}
            </span>
          </div>
          <p className="w-8 text-center text-fourthColor text-lg bg-secundaryColor rounded-lg">
            8
          </p>
        </aside>
      </article>

      <section className="w-full px-10 py-4">
        <div className="grid gap-2">
          <div className="w-full flex gap-3">
            <i className="uil uil-share-alt text-3xl text-thirdColor"></i>{" "}
            <i className="uil uil-heart text-3xl text-thirdColor"></i>
          </div>

          <article className="grid grid-cols-4 grid-rows-2 gap-1">
            <img
              src={images[0]}
              className="w-[640px] h-96 col-span-2 row-span-2 rounded-lg"
            />
            <img src={images[1]} className="w-80 h-[190px] rounded-lg" />
            <img src={images[2]} className="w-80 h-[190px] rounded-lg" />
            <img src={images[3]} className="w-80 h-[190px] rounded-lg" />
            <img src={images[4]} className="w-80 h-[190px] rounded-lg" />
          </article>

          <article className="w-full py-5">
            <h2 className="text-xl font-bold text-secundaryColor mb-5">
              {product.motto}
            </h2>
            <p className="text-sm text-grayColor">{product.description}</p>
          </article>
        </div>
      </section>
      <article className="w-full py-4">
        <div className="px-10 my-5">
          <h2 className="text-xl font-bold text-secundaryColor">
            ¿Qué ofrece este lugar?
          </h2>
        </div>
        <hr className="w-full text-secundaryColor" />
        <div className="w-full grid grid-cols-4 grid-rows-2 gap-5 px-10 pt-5">
          {features.map((ft, index) => {
            return (
              <div
                key={index}
                className="w-[250px] h-10 flex gap-2 text-left items-center"
              >
                <i className={`${ft.icon} text-2xl text-thirdColor`}></i>
                <span className="text-grayColor">{ft.name}</span>
              </div>
            );
          })}
        </div>
      </article>

      <article className="w-full h-96 flex justify-center items-center px-10 my-5">
        <img
          src="https://www.enter.co/wp-content/uploads/2017/06/Google-Maps-colombia-768x432.jpg"
          alt=""
          className="w-full h-full"
        />
      </article>

      <article className="w-full py-4">
        <div className="px-10 my-5">
          <h2 className="text-xl font-bold text-secundaryColor">
            Qué tenés que saber
          </h2>
        </div>
        <hr className="w-full text-secundaryColor" />
        <div className="grid grid-cols-3 px-10 my-5">
          <div>
            <h2 className="text-thirdColor text-lg font-bold mb-2">
              Normas de la casa
            </h2>
            <div className="grid gap-3">
              {standards.map((stg, index) => {
                return (
                  <p key={index} className="text-sm text-grayColor">
                    {stg}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-thirdColor text-lg font-bold mb-2">
              Salud y seguridad
            </h2>
            <div className="grid gap-3">
              {safety.map((stg, index) => {
                return (
                  <p key={index} className="text-sm text-grayColor">
                    {stg}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-thirdColor text-lg font-bold mb-2">
              Política de cancelación
            </h2>
            <div className="grid gap-3">
              {cancellation.map((stg, index) => {
                return (
                  <p key={index} className="text-sm text-grayColor">
                    {stg}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProductDetail;
