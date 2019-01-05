import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div className="Navbar">
    <div className="inner">
      <div style={{ flexGrow: 1 }}>
        <img className="logo" src="https://cache.dominos.com/olo/5_50_2/assets/build/images/img/dpz-logo.svg" alt="Domino's Logo" />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff',
        flexGrow: 2
      }}>
        <h1 style={{ margin: 0, display: 'flex' }}>Find Your Nearest Domino's<span className="nav-reg">&reg;</span></h1>
      </div>
      <div style={{ flexGrow: 1 }}></div>
    </div>
  </div>
);

export default Navbar;
