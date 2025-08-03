import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/index/web-log.svg";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Fermer le menu burger au changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header-home ${!isHome ? "white-navbar" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" aria-label="Accueil">
          <img src={logo} alt="Logo site" width="32" height="32" />
        </NavLink>
      </div>

      {/* Menu burger */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Ouvrir le menu"
        aria-expanded={isMenuOpen}
      >
        &#9776;
      </button>

      {/* Navigation */}
      <nav className={`navigation-bar ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          ACCUEIL
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
          PORTFOLIO
        </NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>
          A PROPOS
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          CONTACT
        </NavLink>
      </nav>

      {/* Barre de recherche ou lien mail */}
      <div className="search-form">
        <label htmlFor="search-input" className="visually-hidden">Rechercher</label>
        {isHome ? (
          <input
            type="text"
            id="search-input"
            placeholder="🔍 RECHERCHER"
            aria-label="Rechercher"
          />
        ) : (
          <a href="mailto:medfc@yahoo.fr" className="work-with-me">
            Rejoignez-nous!
          </a>
        )}
      </div>
    </header>
  );
}

export default Navbar;
