import React,{useContext,useRef,useEffect, useState} from 'react'
import { CountriesContext } from '../contexts/CountriesContext'
import { ImSearch } from 'react-icons/im'
import { ImCancelCircle } from 'react-icons/im'

const Options = () => {
  const { countries, setCountries,originArray,setOriginArray } = useContext(CountriesContext)
  const [filterWord, setFilterWord] = useState('')
  const [filterRegion,setFilterRegion] = useState('')
  const search = useRef()
  const select = useRef()

  useEffect(() => {
    if (filterWord.length > 0) {
      setCountries(countries.filter((each) => each.name.common.toLowerCase().includes(filterWord.toLowerCase().trim()) ))
    }
    if (filterWord.length == 0) {
      setCountries(originArray)
      select.current.value='DEFAULT'
    }
  }, [filterWord]);

  useEffect(() => {
    if (filterRegion == '' || filterRegion== 'all') setCountries(originArray)
    else {
      setCountries(originArray.filter((each) => each.region.toLowerCase()==filterRegion))
    }
  }, [filterRegion]);
  
  const CountryFilter = (e) => {
    setFilterWord(e.target.value)
  }
  const filterRemover = () => {
    setFilterWord('')
    search.current.value=''
  }
  const selectRegion = (e) => {
    setFilterRegion(e.target.value)
  }

  return (
    <div className="flex items-center justify-center mt-4 ">
      <div className="py-6 mobile:p-2 w-11/12 flex mobile:gap-8 justify-between items-center mobile:flex-col">
        <div className="flex items-center rounded-md p-2 px-4 justify-between w-1/3 mobile:w-full mobile:px-3 dark:bg-darkElbg bg-white shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]">
          <div className="flex items-center w-full px-4 py-2 gap-6 mobile:gap-2 justify-start">
            <ImSearch />
            <input onChange={CountryFilter} ref={search} className="p-1 focus:outline-none w-full dark:bg-darkElbg" type='text' placeholder="Search for a country..." />
          </div>
          {filterWord.length>0 &&
          <ImCancelCircle onClick={filterRemover} className="cursor-pointer min-w-max" />
          }
        </div>
        <div className="flex items-center justify-between rounded-lg p-2 bg-white dark:bg-darkElbg shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] ">
          <select defaultValue={'DEFAULT'} onChange={selectRegion} className="cursor-pointer focus:outline-none dark:bg-darkElbg py-2 px-6 mobile:px-2 " ref={select}>
            <option value="DEFAULT" disabled>Filter by Region </option>
            <option value="all">All Regions</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>

  )
}

export default Options