import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import loader from '../images/loader.gif'

export const CountriesContext = createContext();

export const CountryProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [originArray, setOriginArray] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading,setLoading] = useState(true)

  const apiEndPoint = 'https://restcountries.com/v3.1/all'

  useEffect(() => {
    const getAPI = async () => {
      setLoading(true)
      const { data: response } = await axios.get(apiEndPoint);
      setCountries(response);
      setOriginArray(response);
      setLoading(false)
    };
    getAPI();
  },[])

  return (
    <CountriesContext.Provider value={{countries, setCountries,originArray,setOriginArray,currentPage, setCurrentPage}}>
      {loading &&
      <div>
        <div className="fixed h-screen z-10 w-full bg-black opacity-20 dark:bg-white"></div>
        <div className="fixed h-screen w-full flex items-center flex-col gap-2 justify-center">
          <div className="dark:text-white text-3xl">Loading...</div>
          <div><img src={loader} alt='loader-gif' /></div>
        </div>
      </div>
      }
      {props.children}
    </CountriesContext.Provider>
  )
}