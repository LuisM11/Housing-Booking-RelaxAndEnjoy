import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/ProductDetail/Header";
import DataForm from "../components/Reservation/DataForm";

import { useGlobalContext } from "../context/GlobalContext";

function Reservation() {
  const { id } = useParams();
  const { getProductById } = useGlobalContext();
  const [product, setProduct] = useState({});

  const getProduct = async (id) => {
    window.scrollTo(0, 68);
    const resp = await getProductById(id);
    setProduct(resp);
    setImages(resp.images);
    setFeatures(resp.features);
  };

  useEffect(() => {
    getProduct(id);
  }, []);
  return (
    <div>
      <Header product={product} />
      <DataForm product={product} />
    </div>
  );
}

export default Reservation;
