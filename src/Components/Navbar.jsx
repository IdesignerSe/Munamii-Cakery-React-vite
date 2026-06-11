import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img
            src="/images/munamii_logo.png"
            alt="Munamii Logo"
            className="nav-logo"
          />
        </Link>
      </div>

      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-right">
        <Link to="/cart" className="cart-icon">🛒</Link>
      </div>
    </nav>
  );
}
