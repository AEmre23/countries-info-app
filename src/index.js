import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "./contexts/ThemeContext";
import { CountryProvider } from './contexts/CountriesContext'
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CountryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CountryProvider>
  </BrowserRouter>
);
