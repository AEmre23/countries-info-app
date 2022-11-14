import React, { useContext } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { CountriesContext } from '../contexts/CountriesContext'
import { Commify } from '../functions/Commify'
import { BiArrowBack } from 'react-icons/bi'
import BorderFinder from '../components/BorderFinder'


const CountryDetail = () => {
  const { originArray } = useContext(CountriesContext)
  const navigate = useNavigate();
  const { id } = useParams();


  let chosenCountry = originArray.find((selected) => selected.cca3 === id)

  let languages = chosenCountry.languages ? Object.values(chosenCountry.languages) : ["No language"]
  let nativeName = chosenCountry.name.nativeName ? Object.values(chosenCountry.name.nativeName) : chosenCountry.name.common
  console.log(nativeName)
  let currencies = null
  let allCurrencies = []
  if (chosenCountry.currencies) {
    currencies = Object.values(chosenCountry.currencies)
    currencies.forEach((each) => {
      allCurrencies.push(each.name)
    })
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className="w-11/12 px-4 pt-8 mobile:pt-4">
          <div onClick={() => navigate(-1)}  className="relative z-10 cursor-pointer w-28 rounded-md shadow-2xl bg-lightmodebg border-2 p-3 transition-all hover:scale-105 dark:bg-darkElbg flex items-center gap-2 justify-center ">
            <BiArrowBack/>
            <button>Back</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-h-[calc(100vh_-_192px)] mobile:max-h-[calc(100%_-_150px)]">
        <div className="w-11/12 mobile:w-full flex mobile:flex-col gap-12 mobile:gap-0 px-4 py-1">
          <div className="w-1/2 mobile:min-w-full h-1/2 mobile:h-auto mt-4 flex justify-center items-center">
            <img className="w-full h-auto max-h-[475px] bigscreen:max-h-[600px] mobile:h-auto mobile:w-100 shadow-xl" src={chosenCountry.flags.svg} alt='country-flag'/>
          </div>
          <div className="flex w-1/2 mobile:w-full flex-col gap-12 bigscreen:gap-20 p-l-8 py-12">
            <div className="font-extrabold text-3xl">
              {chosenCountry.name.common}
            </div>
            <div className="flex mobile:flex-col gap-24 mobile:gap-4">
              <div className="flex w-1/2 mobile:w-full flex-col gap-3">
                <div className=""><span className="font-semibold">Native Name:</span> {typeof(nativeName) !== "string" ? nativeName[0].common : nativeName}</div>
                <div className=""><span className="font-semibold">Population:</span> {Commify(chosenCountry.population)}</div>
                <div className=""><span className="font-semibold">Region:</span> {chosenCountry.region}</div>
                <div className=""><span className="font-semibold">Sub Region:</span> {chosenCountry.subregion}</div>
                <div className=""><span className="font-semibold">Capital:</span> {chosenCountry.capital}</div> 
              </div>
              <div className="flex w-1/2 mobile:w-full flex-col gap-3">
                <div className=""><span className="font-semibold">Top Level Domain:</span> {chosenCountry.tld}</div>
                <div className=""><span className="font-semibold">Currencies: </span>
                  {allCurrencies.map((each,index) => (
                    index+1==allCurrencies.length ? <span key={index}>{each}</span> : <span key={index}>{each}, </span>
                  ))}
                </div>
                <div className=""><span className="font-semibold">Languages: </span>
                  {languages.map((each, index) => (
                  index+1==languages.length ? <span key={index}>{each}</span> : <span key={index}>{each}, </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4 mobile:flex-col">
              <div className="flex items-start font-semibold min-w-max">Border Countries:</div>
              <div className="flex flex-wrap gap-5">
                <BorderFinder 
                  chosenCountry={chosenCountry}
                  originArray={originArray}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CountryDetail
