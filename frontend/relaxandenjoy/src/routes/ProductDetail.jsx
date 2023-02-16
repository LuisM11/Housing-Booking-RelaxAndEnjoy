import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-calendar/dist/Calendar.css";

import { useGlobalContext } from "../context/GlobalContext";

import Header from "../components/ProductDetail/Header";
import LocationAndScore from "../components/ProductDetail/LocationAndScore";
import Gallery from "../components/ProductDetail/Gallery";
import Features from "../components/ProductDetail/Features";
import Availability from "../components/ProductDetail/Availability";
import Policies from "../components/Policies";

function ProductDetail() {
  const { id } = useParams();
  const { getProductById } = useGlobalContext();
  const [product, setProduct] = useState({});
  const [features, setFeatures] = useState([]);
  const [images, setImages] = useState([]);

  const getProduct = async (id) => {
    window.scrollTo(0, 68)
    const resp = await getProductById(id);
    setProduct(resp);
    setImages(resp.images);
    setFeatures(resp.features);
  };

  useEffect(() => {
    getProduct(id);
  }, []);
  return (
    <>
      <section className="w-full h-full">
        <Header product={product} />
        <LocationAndScore product={product} />

        <section className="w-full py-4">
          <div className="grid gap-2">
            <div className="w-full flex gap-3 px-3 tablet:px-6 desktop:px-10">
              <i className="uil uil-share-alt text-2xl desktop:text-3xl text-thirdColor"></i>{" "}
              <i className="uil uil-heart text-2xl desktop:text-3xl text-thirdColor"></i>
            </div>

            <Gallery images={images}/>

            <article className="w-full px-3 tablet:px-6 desktop:px-10 py-5">
              <h2 className="text-2xl font-bold text-secundaryColor mb-5">
                {product.title}
              </h2>
              <p className="text-sm text-grayColor">{product.description}</p>
            </article>
          </div>
        </section>

        <Features features={features} />
        

        <Availability product={product} />

        <article className="w-full grid justify-center items-center px-3 tablet:px-6 desktop:px-10 py-8">
          <h2 className="text-2xl font-bold text-secundaryColor mb-5">
            ¿Dónde vas a estar?
          </h2>
          <img
            src="https://www.enter.co/wp-content/uploads/2017/06/Google-Maps-colombia-768x432.jpg"
            alt=""
            className="tablet:w-full h-full rounded-lg"
          />
        </article>
        <Policies />
      </section>
    </>
  );
}

export default ProductDetail;
