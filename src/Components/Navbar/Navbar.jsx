import React from 'react'
import { FaUserDoctor } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <FaUserDoctor/>
        <p>MyName</p>
      </div>
      <div className="navbar-links">
        <Link to="/Accueil">Accueil</Link>
        <Link to="/Rendez-vous">Prendre Rendez-vous</Link>
        <Link to="/Quizz">Se diriger</Link>
      </div>
    </div>
  )
}

export default Navbar