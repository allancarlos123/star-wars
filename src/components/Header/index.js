import React from 'react'
import logo from '../../logo.svg';
import './style.css';

const Header = () => (
  <header className="header">
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  </header>
)

export default Header;