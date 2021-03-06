import React from "react";
import './Navbar.css';
import CartWidget from "./CartWidget";


export const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="nav-logo">JTC Shop</span>
      <div className="nav-items">
        <a href="/Home">Home</a>
        <a href="/Productos">Productos</a>
        <a href="/Contacto">Contacto</a>
      </div>
      <CartWidget />
    </div>
  )
};

export default Navbar;