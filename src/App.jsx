import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Homepage from './Pages/Homepage';
import Quizz from './Pages/Quizz';
import Rendezvous from './Pages/Rendezvous';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <>
    
      <Router>
      <Navbar/>
        <Routes>  
          <Route path="Accueil" exact element={<Homepage/>}/>
          <Route path="Quizz" exact element={<Quizz/>}/>
          <Route path="Rendez-vous" exact element={<Rendezvous/>} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
