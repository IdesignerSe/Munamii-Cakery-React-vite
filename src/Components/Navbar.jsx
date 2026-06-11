import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/images/munamii_logo.png"
              alt="Munamii Logo"
              className="nav-logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="nav-right">
          <Link to="/cart" className="cart-icon" onClick={closeMenu}>🛒</Link>

          {/* Hamburger Icon (mobile) */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={open ? "bar bar1 open" : "bar bar1"}></div>
            <div className={open ? "bar bar2 open" : "bar bar2"}></div>
            <div className={open ? "bar bar3 open" : "bar bar3"}></div>
          </div>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/cart" onClick={closeMenu}>Cart</Link>
      </div>
    </>
  );
}
