import React,{useState} from 'react'
import Options from '../components/Options'
import AllCountries from '../components/AllCountries'

const Main = () => {
  const [filterWord, setFilterWord] = useState('')
  return (
    <div>
      <Options filterWord={filterWord} setFilterWord={setFilterWord} />
      <AllCountries filterWord={filterWord} />
    </div>
  )
}

export default Main
