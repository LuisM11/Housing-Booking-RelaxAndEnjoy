import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useGlobalContext } from '../context/GlobalContext';
import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import moment from "moment";
import Swal from 'sweetalert2';
import ProductCardSkeleton from '../components/Skeleton/ProductCardSkeleton';

const generateStringParams = (data) => {
  const entries = Object.entries(data);
  return entries.reduce((acc, x) => acc + x[0] + "=" + x[1] + "&", "").slice(0, -1)
}


function SearchedProducts() {
  const [setHideCategories, searchData, cities] = useOutletContext()
  const { getProductsWithParams } = useGlobalContext();
  const [products, setProducts] = useState([])
  const [loading, setloading] = useState(true)
  const [urlParams, setUrlParams] = useSearchParams()
  const nav = useNavigate()
  const paramsAndFetch = async () => {
    let init
    let end
    let cityId
    let data = structuredClone(searchData)
    if (data.city != "") {
      /* await cities */
      cityId = cities.find(e => e.name.toLowerCase() == data.city).id
      data.city = cityId
    }
    if (data.Rangepicker != undefined) {
      init = moment(data.Rangepicker[0].$d).format('YYYY-MM-DD')
      end = moment(data.Rangepicker[1].$d).format('YYYY-MM-DD')
      delete data['Rangepicker']
      data = { ...data, init, end }
    }
    for (let atr in data) {
      (data[atr] == undefined || data[atr] == '') && delete data[atr]
    }
    setUrlParams(data)
    const responseFetch = await getProductsWithParams(generateStringParams(data))
    if(responseFetch.status == 200){
      setProducts(responseFetch.data)
      setloading(false)
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oh no...',
        text: 'Lamentablemente por el momento no hay alojamientos con los parametros de busqueda especificados',
        showConfirmButton: false,
        timer: 5000
      })
      nav('/Home')
      
    }
  }

  useEffect(() => {
    paramsAndFetch()
    setHideCategories(true)
    return () => {
      setHideCategories(false)
      if (loading == false) {
        setloading(true)
      }

    }

  }, [urlParams])




  return (

    <section onClick={() => console.log(urlParams)} className="h-full w-full grid bg-secundaryColor bg-opacity-10">
      <article className="w-11/12 grid gap-4 my-5 mx-auto">
        <h2 className="text-xl text-secundaryColor font-bold">
          Resultados de Alojamientos
          <span className='hidden desktop:inline'>
            {searchData.city ? " en " : undefined}
            {searchData.city ? <span className='font-normal mx-2'> {searchData.city.charAt(0).toUpperCase() + searchData.city.slice(1)} </span> : undefined}
            {searchData.Rangepicker ? " desde " : undefined}
            {searchData.Rangepicker ? <span className='font-normal mx-2'> {moment(searchData.Rangepicker[0].$d).format('YYYY-MM-DD')}</span> : undefined}
            {searchData.Rangepicker ? " hasta " : undefined}
            {searchData.Rangepicker ? <span className='font-normal mx-2'>{moment(searchData.Rangepicker[1].$d).format('YYYY-MM-DD')}</span> : undefined}
          </span>
        </h2>
        <div className="w-full grid grid-cols-1 desktop:grid-cols-2 gap-5">
        {loading ? [1, 2, 3, 4, 5, 6].map(x => {
            return (<ProductCardSkeleton key={x} />)
          })
            : undefined}
          {products?.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </article>
    </section >

  )
}

export default SearchedProducts