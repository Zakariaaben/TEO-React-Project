import React from 'react'
import PsychologistCard from '../PsychologistCard/PsychologistCard'
import "./PsyCards.css"
import PsychologistData from "./Psychologues.json"
const PsyCards = (props) => {
    const Query = props.Query
    const psychologues = PsychologistData.psychologues


    const filteredPsy= psychologues.filter(psychologue => psychologue.nom.toLowerCase().includes(Query.toLowerCase()) )
    
    


  return (
    <div className='PsyCards'>
        {filteredPsy.map((psychologue,index ) =>
        <PsychologistCard key={index} psychologist={psychologue} />
        )
      }
      </div>
  )
}

export default PsyCards