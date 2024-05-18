import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { BiMenu, BiX } from 'react-icons/bi'

const Navbar = () => {
  const [openMenu,isOpenmenu] = useState(false);
  const menuref = useRef(null)
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      menuref.current &&
      !menuref.current.contains(event.target)
  ) {
      isOpenmenu(false);
  }
};
   
  const ToggleMenu= ()=>{
    isOpenmenu(!openMenu)
  }

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = openMenu ? 'hidden' : 'auto';
    };

    handleBodyScroll(); // Call initially to set overflow style

    return () => {
      document.body.style.overflow = 'auto'; // Reset overflow style when component unmounts
    };
  }, [openMenu]);
  
  
  return (
    
    <div className="Navbar">
      
      <div className="Logo">
        <img src="/Images/couteau.svg" alt=""  style={{height:"30px"}}/>
        <p>MyAidologue</p>
      </div>
      <div className={`navbar-links ${openMenu ? "active" : ""} `} ref={menuref}>
        <Link className="links"to="/Accueil" onClick={()=>isOpenmenu(false)}>Accueil</Link>
        <Link className="links"to="/Rendez-vous"  onClick={()=>isOpenmenu(false)}>Prendre Rendez-vous</Link>
        <Link className="links"to="/Quizz"  onClick={()=>isOpenmenu(false)}>Se diriger</Link>
        <BiX className='closemenu'  onClick={()=>isOpenmenu(false)} />
      </div>
      <BiMenu className="iconMenu" onClick={()=>ToggleMenu()} />
        
    </div>
  )
}

export default Navbar