import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useGlobalContext } from '../context/GlobalContext';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


function SearchedProducts() {
  const [setHideCategories, searchData, cities] = useOutletContext()
  const { getProductsByCity } = useGlobalContext();
  const [products, setProducts] = useState([])
  const [urlParams, setUrlParams] = useSearchParams()

  const getCityId = async () => {
    await cities
    const cityId = cities.find(e => e.name.toLowerCase() == searchData.city).id
    const p = await getProductsByCity(cityId)
    setProducts(p)
  }

  useEffect(() => {
    getCityId()
    setUrlParams(searchData)
    setHideCategories(true)
    return ()=>{
      setHideCategories(false)

      }
    
  }, [urlParams])

  
  

  return (

    <section className="h-full w-full grid bg-secundaryColor bg-opacity-10">
      <article className="w-11/12 grid gap-4 my-5 mx-auto">
        <h2 className="text-xl text-secundaryColor font-bold">
          Resultados de Alojamientos en '{searchData.city}'
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

export default SearchedProducts