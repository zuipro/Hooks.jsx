import React from 'react'
import Home from './Home/HeroSection';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Landing from './Landing';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/"  element={ <Landing />}/>
        <Route path="/Home"  element={ <Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
