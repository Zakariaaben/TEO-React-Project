import React, { useEffect, useState } from 'react'
import "./Resultat.css"
const Resultat = ({type}) => {
    const name = [
        "un Psychologue clinicien",
        "psychologue spécialisé en thérapie de couple",
        "un psychologue spécialisé en thérapie cognitivo-comportamentale",
        "psychologue spécialisé en traumatisme",
        "psychologue pour enfants ",
        "Psychologue spécialiste des troubles alimentaires"
    ]
  return (
    <div className='Resultat'>
        <h1>Votre Résultat</h1>
        <p>Vous devriez vous diriger vers {name[type]}.</p>
    </div>
  )
}

export default Resultat