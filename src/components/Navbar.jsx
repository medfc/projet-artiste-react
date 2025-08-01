import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/index/web-log.svg";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`header-home ${!isHome ? "white-navbar" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" aria-label="Accueil">
          <img src={logo} alt="Logo site" width="32" height="32" />
        </NavLink>
      </div>

      {/* Burger menu (optionnel pour mobile) */}
      <button className="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
        &#9776;
      </button>

      {/* Navigation */}
      <nav className="navigation-bar">
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

      {/* Recherche */}
      <div className="search-form">
        <label htmlFor="search-input" className="visually-hidden">Rechercher</label>
        <input
          type="text"
          id="search-input"
          placeholder="🔍 RECHERCHER"
          aria-label="Rechercher"
        />
      </div>
    </header>
  );
}

export default Navbar;
