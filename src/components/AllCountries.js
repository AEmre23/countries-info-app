import React, { useContext, useState, useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { CountriesContext } from '../contexts/CountriesContext'
import { Link } from "react-router-dom";
import {Commify} from '../functions/Commify.js'


const AllCountries = () => {
  const { countries,setCountries, originArray, currentPage, setCurrentPage } = useContext(CountriesContext)
  const [parent] = useAutoAnimate()
  const [dataPerPage, setDataPerPage] = useState(16)
  let lastDataIndex = currentPage * dataPerPage 
  let firstDataIndex = currentPage * dataPerPage - dataPerPage
  let newDataMap = countries.slice(firstDataIndex, lastDataIndex)
  


  let pageNumbers = []
  for (let x = 1; x <= Math.ceil(countries.length / dataPerPage); x++){
    pageNumbers.push(x)
  }

  const navigatePage = (e) => {
    if (e.currentTarget.value === '1') {
      if (currentPage !== 1) setCurrentPage(preVal=> preVal - 1)
    }
    else if (e.currentTarget.value === '2') {
      if(currentPage !== pageNumbers.length) setCurrentPage(preVal => preVal + 1)
    }
  }

  useEffect(() => {
    setCountries(originArray)
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div ref={parent} className="flex flex-wrap pb-16 mobile:pb-12 min-h-max mobile:justify-center mobile:gap-8 gap-[calc(20%_/_3)] gap-y-20 w-11/12 py-6">
        {newDataMap.map((eachCountry) => {
          return (
          <div key={eachCountry.cca3} className="overflow-hidden rounded-t-lg flex w-1/5 mobile:w-auto  cursor-pointer justify-center items-start shadow-xl hover:scale-105 transition-all bg-white dark:bg-darkElbg">
            <Link to={eachCountry.cca3}>
            <div className="flex flex-col justify-between">
              <div className="flex items-end justify-center shadow-lg">
                <img className="w-96 h-44 rounded-t-lg" src={eachCountry.flags.png} alt='country-flag' />
              </div>
              <div className="p-6 flex flex-col justify-center gap-3">
                <div className="font-extrabold text-xl">
                  {eachCountry.name.common}
                </div>
                <div className="flex flex-col gap-1">
                  <div><span className="font-semibold">Population:</span> {Commify(eachCountry.population)} </div>
                  <div><span className="font-semibold">Region:</span> {eachCountry.region}</div>
                  <div><span className="font-semibold">Capital:</span> {eachCountry.capital}</div>    
                </div>
              </div>
            </div>
            </Link>  
          </div>
          )})
          }
      </div>
      {pageNumbers.length > 1 &&
      <>
        <div className="bg-slate-200  dark:bg-slate-400 opacity-90 bottom-0 p-3 mobile:pb-6 flex mobile:flex-wrap items-center gap-2 border-t-2 border-black w-full justify-center">
          <button value='1' onClick={navigatePage} className="border-2 cursor-pointer border-black dark:border-gray-200 rounded-lg py-1 px-4 transition-all active:scale-95 mr-2">Previous</button>
          {pageNumbers.map((each) => (
            <div onClick={(e)=>setCurrentPage(Number(e.target.innerText))} className={` ${each === currentPage && 'bg-blue-500 text-white'} border mobile:hidden cursor-pointer border-gray-700 py-1 px-2 rounded-xl transition-all active:scale-95`} key={each}>{each}</div>
          ))}
          <select value={currentPage} onChange={(e)=>setCurrentPage(Number(e.target.value))} className="hidden mobile:block dark:bg-slate-400 dark:text-white dark:border-white  ">
          {pageNumbers.map((each) => (
            <option key={each} className="text-black ">{each}</option>
          ))}
          </select>
          <span className="hidden mobile:block text-2xl">/</span>
          <button value={pageNumbers.at(-1)} className="hidden mobile:block text-xl border border-gray-700 dark:border-white py-1 px-1 rounded-xl cursor-pointer" onClick={(e) => setCurrentPage(Number(e.target.value))}>{pageNumbers.at(-1)}</button>
          <button value='2' onClick={navigatePage} className="border-2 cursor-pointer border-black dark:border-gray-200 rounded-lg py-1 px-4 transition-all active:scale-95 ml-2 ">Next</button>
        </div>
      </>
      }
    </div>
  )
}

export default AllCountries
