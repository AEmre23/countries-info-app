import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {

  const [theme, setTheme] = useState(false)

    useEffect(() => {
    // Tailwind dark theme changer code block, it adds <html> element a 'dark' class.
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme(true)
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  )
}