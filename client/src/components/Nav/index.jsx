import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleNavLinkClick = () => setIsOpen(false);
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <h1>Sara Laskey</h1>
          </Link>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav id="primary-navigation" className={`nav-menu ${isOpen ? "is-open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/vo" className="nav-link" onClick={handleNavLinkClick}>VO</Link>
            </li>
            <li className="nav-item">
              <Link to="/acting" className="nav-link" onClick={handleNavLinkClick}>Acting</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link" onClick={handleNavLinkClick}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/bio" className="nav-link" onClick={handleNavLinkClick}>Bio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
