import React, { useEffect, useState } from 'react'
import PsychologistCard from '../Components/PsychologistCard/PsychologistCard'
import SearchBar from '../Components/SearchBar/SearchBar'
import "./Pages.css"
import PsyCards from '../Components/PsyCard/PsyCards'

const Rendezvous = () => {
  const [Query,SetQuery] = useState("")

  

  return (
    <div className="Page">
      <SearchBar changeQuery={Query=> {SetQuery(Query)
      console.log(Query)}}/>
      <PsyCards Query={Query}/>
    </div>
  )
}

export default Rendezvous