import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3 bg-dark">
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link d-block" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="/Dashboard" className="nav-link d-block">DashBoard</a></li>
          <li className="nav-item"><a href="/Calendar" className="nav-link d-block">Calendar</a></li>
          <li className="nav-item"><a href="/Achievments" className="nav-link d-block">Achievments</a></li>
          <li className="nav-item"><a href="/Progress" className="nav-link d-block">Progress</a></li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
