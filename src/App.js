import { ThemeProvider } from "./contexts/ThemeContext";
import { CountriesContext, CountryProvider } from './contexts/CountriesContext'
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
//? Pages
import Main from "./pages/Main";
import CountryDetail from "./pages/CountryDetail";
//! Components
import Header from "./components/Header";

function App() {
  return (
    <CountryProvider>
      <ThemeProvider>
        <div className="min-h-screen text-lightmodetxt bg-lightmodebg dark:bg-darkmodebg dark:text-white transition-all duration-700 max-h-screen mobile:max-h-auto overflow-y-auto mobile:overflow-y-visible overflow-x-hidden scrollbar dark:scrollbardark">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path=":id" element={<CountryDetail />} />
          </Routes>
        </div>
      </ThemeProvider>
    </CountryProvider>
  );
}

export default App;
