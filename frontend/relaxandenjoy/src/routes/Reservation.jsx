import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/ProductDetail/Header";
import DataForm from "../components/Reservation/DataForm";
import Policies from "../components/Policies";

import { useGlobalContext } from "../context/GlobalContext";

function Reservation() {
  const { id } = useParams();
  const { getProductById, user } = useGlobalContext();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const getProduct = async (id) => {
    window.scrollTo(0, 68);
    const resp = await getProductById(id);
    setProduct(resp);
  };

  useEffect(() => {
    if (user == null) {
      navigate("/Home");
    } else {
      getProduct(id);
    }
  }, []);
  
  return (
    <div>
      <Header product={product} />
      <DataForm product={product} />
      <Policies />
    </div>
  );
}

export default Reservation;
