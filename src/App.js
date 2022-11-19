import React, { useContext, useEffect, useState } from "react";
import { CountriesContext } from "./contexts/CountriesContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CountryProvider } from './contexts/CountriesContext'
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import loader from '../src/images/loader.gif'
//? Pages
import Main from "./pages/Main";
import CountryDetail from "./pages/CountryDetail";
//! Components
import Header from "./components/Header";

function AppComponent() {
  const [loading, setLoading] = useState(false)
  const {originArray, setCountries,setOriginArray} = useContext(CountriesContext)

  const getAPI = async () => {
    setLoading(true)
    const { data: response } = await axios.get('https://restcountries.com/v3.1/all');
    setCountries(response);
    setOriginArray(response);
    setLoading(false)
  };

  useEffect(() => {
    getAPI();
  },[])

  return (
    <div className="min-h-screen text-lightmodetxt bg-lightmodebg dark:bg-darkmodebg dark:text-white max-h-screen mobile:max-h-auto overflow-y-auto mobile:overflow-y-visible overflow-x-hidden scrollbar dark:scrollbardark">
      <Header />
      {loading ?
      <div>
        <div className="fixed h-screen z-10 w-full bg-black opacity-20 dark:bg-white"></div>
          <div className="fixed h-screen w-full flex items-center flex-col gap-2 justify-center">
            <div className="dark:text-white text-3xl">Loading...</div>
            <div><img src={loader} alt='loader-gif' /></div>
          </div>
        </div>
        : null
      }
      <Routes>
        <Route path="/" element={<Main />} />
        {originArray.length > 0 ? <Route path="/detail/:id" element={<CountryDetail />} /> : null}
      </Routes>
    </div>
  );
}

function App() {
  return(
    <CountryProvider>
      <ThemeProvider>
       <AppComponent />
      </ThemeProvider>
    </CountryProvider>
  )
}

export default App;
