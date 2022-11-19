import React from 'react'
import {Link} from 'react-router-dom'

  const BorderFinder = ({chosenCountry,originArray}) => {
    let borderFullNames = []
    let borderShortNames = []
  if (chosenCountry.borders) {
    chosenCountry.borders.forEach((each) => {
      borderShortNames.push(each)
      originArray.forEach((selected) => {
        if (selected.cca3.toUpperCase() == each) borderFullNames.push(selected.name.common)
      })
    })
    let lastArray = []
    for (let x = 0; x < borderFullNames.length; x++){
      lastArray.push([borderShortNames[x],borderFullNames[x]])
    }
    return (
      lastArray.map((each, index) => (
        <Link className="cursor-pointer transition-all hover:scale-105 " key={index} to={`/detail/${each[0]}`}>
          <span className="border-2 px-2 py-1 shadow-md rounded-md dark:bg-darkElbg">{each[1]}</span>
        </Link>
      ))
    )
  } else return <span>This is an island country so it's only neighbor is water.</span>
}

export default BorderFinder
