import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import {registerFetch,logInFetch,captureToken} from "./authUtils";

export const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const ContextProvider = ({ children }) => {
  const [CategoriesList, setCategoriesList] = useState([]);
  const [selectMenu, setSelectMenu] = useState(0);
  const [user, setUser] = useState(null);
  const [reservationAttempt, setreservationAttempt] = useState(0)

  
  const getCategoriesList = async () => {
    return await axios
    .get("http://3.145.6.239:8080/categories") //3.145.6.239
    .then((resp) => setCategoriesList(resp.data));
  };
  const getCitiesList = async () => {
    return await axios
    .get("http://3.145.6.239:8080/cities")
    .then((resp) => resp.data);
  };
  
  const getProductsList = async () => {
    return await axios
    .get("http://3.145.6.239:8080/products")
    .then((resp) => resp.data);
  };
  
  const getProductById = async (id) => {
    return await axios
    .get(`http://3.145.6.239:8080/products/${id}/`)
    .then((resp) => resp.data);
  };
  const getProductsByCategory = async (id) => {
    return await axios
    .get(`http://3.145.6.239:8080/products/category/${id}/`)
    .then((resp) => resp.data);
  };

  const getProductsWithParams = async (params) => {
    return await axios
    .get(`http://3.145.6.239:8080/products/?${params}`)
    .then((resp) => resp);
  };

  const getProductReservations = async (id) => {
    return await axios
    .get(`http://3.145.6.239:8080/products/${id}/reservation`)
    .then((resp) => resp);
  };


  const authFunctions ={registerFetch, logInFetch, captureToken}

 

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <GlobalContext.Provider
    value={{
      ...authFunctions,
      reservationAttempt,setreservationAttempt,
      CategoriesList,
      selectMenu,
      setSelectMenu,
      user,
      setUser,
      getProductReservations,
      getProductsList,
      getProductById,
      getProductsByCategory,
      getProductsWithParams,
      getCitiesList
    }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
