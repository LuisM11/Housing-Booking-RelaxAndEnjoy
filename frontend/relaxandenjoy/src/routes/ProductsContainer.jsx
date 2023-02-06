import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";

function ProductsContainer() {
  const { getProductsList } = useGlobalContext();
  const [products,setProducts] = useState([])

  const getProducts= async () =>{
    let products = await getProductsList()
    products.sort((a, b) => 0.5 - Math.random())
    setProducts(products)
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  
  return (
    <section className="h-full w-full grid bg-secundaryColor bg-opacity-10">
      <article className="w-11/12 grid gap-4 my-5 mx-auto">
        <h2 className="text-xl text-secundaryColor font-bold">
          Recomendaciones
        </h2>
        <div className="w-full grid grid-cols-1 desktop:grid-cols-2 gap-5">
          {products?.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default ProductsContainer;
