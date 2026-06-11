import { useState } from "react";
import { Link } from "react-router-dom";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const openCart = () => {
    closeMenu();
    setCartOpen(true);
  };

  const closeCart = () => setCartOpen(false);

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
          {/* Cart Icon */}
          <span className="cart-icon" onClick={openCart}>🛒</span>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={menuOpen ? "bar bar1 open" : "bar bar1"}></div>
            <div className={menuOpen ? "bar bar2 open" : "bar bar2"}></div>
            <div className={menuOpen ? "bar bar3 open" : "bar bar3"}></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <span onClick={openCart}>Cart</span>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar open={cartOpen} onClose={closeCart} />
    </>
  );
}
