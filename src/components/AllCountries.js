import React, { useContext, useState, useRef } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { CountriesContext } from '../contexts/CountriesContext'
import { Link } from "react-router-dom";
import {Commify} from '../functions/Commify.js'


const AllCountries = () => {
  const { countries } = useContext(CountriesContext)
  const [parent] = useAutoAnimate()

  return (
    <div className="flex justify-center items-center mb-4">
      <div ref={parent} className="flex flex-wrap mobile:justify-center mobile:gap-8 gap-[calc(20%_/_3)] gap-y-20 w-11/12 py-6">
        {countries.map((eachCountry) => {
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
    </div>
  )
}

export default AllCountries
