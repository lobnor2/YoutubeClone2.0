import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryDate(selectCategories);
  }, [selectCategories]);
  const fetchSelectedCategoryDate = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then((res) => {
      console.log(res);
      //setSearchResults(res);
      setLoading(false);
    });
  };
  <Context.Provider
    value={{
      loading,
      setLoading,
      searchResults,
      selectCategories,
      setSelectCategories,
      mobileMenu,
      setMobileMenu,
    }}
  >
    {children}
  </Context.Provider>;
};
