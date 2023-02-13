import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const ContextProvider = ({ children }) => {
  const [CategoriesList, setCategoriesList] = useState([]);
  const [selectMenu, setSelectMenu] = useState(0);
  const [user, setUser] = useState(null);

  
  const getCategoriesList = async () => {
    return await axios
    .get("http://localhost:8080/categories")
    .then((resp) => setCategoriesList(resp.data));
  };
  const getCitiesList = async () => {
    return await axios
    .get("http://localhost:8080/cities")
    .then((resp) => resp.data);
  };
  
  const getProductsList = async () => {
    return await axios
    .get("http://localhost:8080/products")
    .then((resp) => resp.data);
  };
  
  const getProductById = async (id) => {
    return await axios
    .get(`http://localhost:8080/products/${id}/`)
    .then((resp) => resp.data);
  };
  const getProductsByCategory = async (id) => {
    return await axios
    .get(`http://localhost:8080/products/Category/${id}/`)
    .then((resp) => resp.data);
  };

  const getProductsByCity = async (id) => {
    return await axios
    .get(`http://localhost:8080/products/City/${id}/`)
    .then((resp) => resp.data);
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <GlobalContext.Provider
    value={{
      CategoriesList,
      selectMenu,
      setSelectMenu,
      user,
      setUser,
      getProductsList,
      getProductById,
      getProductsByCategory,
      getProductsByCity,
      getCitiesList
    }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
