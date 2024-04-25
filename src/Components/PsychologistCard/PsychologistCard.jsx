import React from 'react'
import "./PsychologistCard.css"
import { MdEmail } from 'react-icons/md'
import { Button } from '@mui/material'
import { BiMap, BiPhoneCall } from 'react-icons/bi'

import Flag from 'react-world-flags'
const PsychologistCard = ({psychologist}) => {
  return (
    <div className='Card'>
        <div className='Left-container-card'>
        <img src="src\assets\doctor-svgrepo-com.svg" className='Faceicon' alt="" />
        <div className='informationpsy'>
          <h2>{psychologist.nom}</h2>
          <p>{psychologist.specialite}</p>
          <div className="localisation">

            <div className='mapicon'>
              <BiMap />
            </div>

            <div>
              <p>{psychologist.adresse} </p>
              <p>{psychologist.ville}</p>
            </div>
          </div>
          <p className='Langues'>
              {psychologist.langues.includes("Arabe") && <Flag className='Flag' code={"DZ"} />} 
              {psychologist.langues.includes("Français") && <Flag className='Flag' code={"FR"} />}
              {psychologist.langues.includes("Anglais") && <Flag className='Flag UK' code={"GB"} />}
              
            </p>
        </div>
        </div>
        <div className='Right-container-card'>
          <div className="num-mail">
            <p><MdEmail className='icon'/>{psychologist.email}</p>
            <p><BiPhoneCall className='icon'/>{psychologist.telephone}</p>
            
          </div>
          <Button  className="buttonRDV" variant="contained" >
        Prendre Rendez-Vous
      </Button>
        </div>
    </div>
  )
}

export default PsychologistCard