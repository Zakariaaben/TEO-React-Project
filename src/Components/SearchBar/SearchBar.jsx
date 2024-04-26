import React, { useEffect, useState } from 'react'
import "./SearchBar.css"
import { TextField } from '@mui/material'
import { BiSearch } from 'react-icons/bi'



const SearchBar = (props) => {
  
  return (
    <div className="SearchBar">
        <div>
          <input type="text" placeholder='Rechercher un psychologue' onChange={(e)=>{
            props.changeQuery(e.target.value);
          }}/>
          <BiSearch className='searchicon'/>
        </div>
    </div>
  )
}

export default SearchBar