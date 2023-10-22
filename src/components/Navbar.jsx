import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">Handmade Soap Store</Link>
      <ul className="categories">
        <li><Link to="/category/1">Skin Face Care</Link></li>
        <li><Link to="/category/2">Hypoallergenic</Link></li>
        <li><Link to="/category/3">Exoteric</Link></li>
      </ul>
      <CartWidget itemCount={5} /> {/* Número hardcodeado */}
    </nav>
  );
};

export default Navbar;
