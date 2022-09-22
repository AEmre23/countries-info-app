import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { MdNightlight } from 'react-icons/md'
import { MdLightMode } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  
    const themeChanger = () => {
    setTheme(!theme)
    if (theme == false) localStorage.setItem('theme', 'dark')
    else localStorage.removeItem('theme')
  }

  return (
    <div className="flex w-full justify-between p-7 mobile:px-2 bg-white brightness-105 dark:bg-darkElbg shadow-[rgba(0,_0,_0,_0.24)_0px_2px_2px]">
      <div className="px-12 font-semibold text-2xl bigscreen:text-3xl mobile:px-4 mobile:text-lg flex items-center">
        <Link className="cursor-pointer p-2 bg-gray-300 dark:bg-darkmodebg  rounded-md hover:scale-105 transition-all" to='/'>Where in the world?</Link>
      </div>
      <div onClick={themeChanger} className="p-1 rounded-lg cursor-pointer flex px-12 mobile:px-2 mobile gap-4 mobile:gap-2 shadow-xl border-2 mobile:text-sm hover:scale-105 transition-all ">
        <div className="flex items-center justify-center">
          {theme ? <MdNightlight /> : <MdLightMode/>}
        </div>
        <div className="flex items-center">
         {theme ? 'Dark' : 'Light'} Mode
        </div>
      </div>
    </div>
  )
}

export default Header