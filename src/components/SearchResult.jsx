import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchquery } = useParams();
  const { setLoading } = useContext(Context);
  useEffect(() => {
    fetchSearchResults(searchquery);
  }, [searchquery]);
  const fetchSearchResults = (searchquery) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchquery}`).then((res) => {
      console.log(res);
      setResult(res);
      setLoading(false);
    });
  };
  return <div>SearchResult</div>;
};

export default SearchResult;
