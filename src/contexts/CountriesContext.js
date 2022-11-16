import React, { useState, createContext } from "react";

export const CountriesContext = createContext();

export const CountryProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [originArray, setOriginArray] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <CountriesContext.Provider value={{countries, setCountries,originArray,setOriginArray,currentPage, setCurrentPage}}>
      {props.children}
    </CountriesContext.Provider>
  )
}