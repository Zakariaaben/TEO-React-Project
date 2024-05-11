import React, { useEffect, useState } from 'react'
import PsychologistCard from '../Components/PsychologistCard/PsychologistCard'
import SearchBar from '../Components/SearchBar/SearchBar'
import "./Pages.css"
import PsyCards from '../Components/PsyCard/PsyCards'
import { borderRadius, display, fontSize, height, margin, width } from '@mui/system'
import zIndex from '@mui/material/styles/zIndex'
import { BiCheck, BiCheckCircle } from 'react-icons/bi'

const Rendezvous = () => {
  const [Query,SetQuery] = useState("")
  const [Notif,setNotif] = useState(false);
  
  const showNotif=()=>{
    setNotif(true);
    setTimeout(()=>{
      setNotif(false);
    }, 8000)
  }



  const notifstyle = {
    width:"400px",
    height:"60px",
    position:"fixed",
    top:"80px",
    right:"20px",
    backgroundColor:"white",
    zIndex:"5",
    borderRadius:"10px",
    display:"flex",
    flexDirection:"column",
    overflow:"hidden"

  }
  
  
  

  const linestyle = {
    height:"5px",
    width:"0",
    backgroundColor:"green",
    borderRadius:"10px"
  }
  const notifcontent = {
    height:"57px",
    width:"100%",
    display:"flex"
  }
  const leftnotif ={
    width:"20%",
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
  const rightnotif = {
    width:"80%",
    color:"Black",
    display:"flex",
    marginLeft:"10px",
    alignItems:"center",
    fontWeight:"500",
    fontSize:"19px"
  }
  
  return (
    
    <div className="Page" >
      
      {Notif&&<div className="notif" style={notifstyle}>
        
        <div style={notifcontent}>
          <div style={leftnotif}>
            <BiCheck
              style={{
                fontSize: "30px",
                border: "solid black 2.5px",
                display: "flex",
                
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                borderColor:"green"
              }}
            />
          </div>
          <div style={rightnotif}>Rendez-vous Pris avec succès</div>
        </div>
        <div style={linestyle} className='linestyle'></div>
      </div>}
      <SearchBar
        changeQuery={(Query) => {
          SetQuery(Query);
        }}
      />
      <PsyCards showNotif={showNotif} Query={Query} />
    </div>
  );
}

export default Rendezvous