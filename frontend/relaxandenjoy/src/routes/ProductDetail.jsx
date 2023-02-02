import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-calendar/dist/Calendar.css";

import Product from "../data/Recommendations.json";

import Header from "../components/ProductDetail/Header";
import LocationAndScore from "../components/ProductDetail/LocationAndScore";
import Gallery from "../components/ProductDetail/Gallery";
import Features from "../components/ProductDetail/Features";
import Availability from "../components/ProductDetail/Availability";
import Policies from "../components/ProductDetail/Policies";

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

            <Gallery product={product} images={images} />

            <article className="w-full px-3 tablet:px-6 desktop:px-10 py-5">
              <h2 className="text-2xl font-bold text-secundaryColor mb-5">
                {product.title}
              </h2>
              <p className="text-sm text-grayColor">{product.description}</p>
            </article>
          </div>
        </section>

        <Features features={features} />

        <Availability />

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

        <Policies
          standards={standards}
          safety={safety}
          cancellation={cancellation}
        />
      </section>
    </>
  );
}

export default ProductDetail;
