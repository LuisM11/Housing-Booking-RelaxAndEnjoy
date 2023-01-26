import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const ContextProvider = ({ children }) => {
  const [CategorysList, setCategorysList] = useState([]);
  const [selectMenu, setSelectMenu] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCategorysList();
  }, []);

  const getCategorysList = async () => {
    return await axios
      .get("http://localhost:8080/categories")
      .then((resp) => setCategorysList(resp.data));
  };

  return (
    <GlobalContext.Provider
      value={{ CategorysList, selectMenu, setSelectMenu, user, setUser }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
