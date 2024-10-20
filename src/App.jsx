import React from 'react'
import Home from './Home/HeroSection';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './dashboard/Impactdashboard';
import Calendar from './Calendar';
import Achievements from './AchievementSection';
import Progress from './Home/Progress'
import Navbar from './Home/Navbar';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/"  element={ <Landing />}/>
        <Route path="/Home"  element={ <Home />}/>
        <Route path="/Dashboard"  element={ <Dashboard />}/>
        <Route path="/Calendar"  element={ <Calendar />}/>
        <Route path="/Achievments"  element={ <Achievements />}/>
        <Route path="/Progress"  element={ <Progress />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
