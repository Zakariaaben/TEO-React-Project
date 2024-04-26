import React from 'react'
import "./RDV.css"
import { BiX, BiXCircle } from 'react-icons/bi'
import { FaX } from 'react-icons/fa6'
import { FiX, FiXCircle } from 'react-icons/fi'


const RDV = (props) => {
  return (
    <div className="RDV-container">
      
      <div className='RDV'>
      
          <FiX className='closeicon' onClick={()=>props.closeRDV()}/>
      
      </div>
    </div>
  )
}

export default RDV