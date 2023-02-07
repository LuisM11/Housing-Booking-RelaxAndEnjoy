import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext, useGlobalContext } from '../context/GlobalContext';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function CategorizedProducts() {
    const {getProductsByCategory} = useGlobalContext();
    const [products,setProducts] = useState([])
    const param = useParams()

    useEffect(() => {
        (async ()=>{
            const p = await getProductsByCategory(param.id)
            setProducts(p)
        })()
    }, [param])
    

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
  )
}


