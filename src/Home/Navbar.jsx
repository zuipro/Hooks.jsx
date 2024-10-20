import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3 bg-dark">
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link d-block" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link d-block">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link d-block">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link d-block">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link d-block">About</a></li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
