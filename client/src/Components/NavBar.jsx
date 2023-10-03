import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} width="80px" alt="logotipo" />

        <Link className="navbar-brand" to="/">
          TECHNOLOGY SHOP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavItem link="/" label="Inicio" />
            <NavItem link="/catalogo" label="Catalogo" />
            <NavItem link="/productos" label="Productos" />
            <NavItem link="#" label="Promociones" />
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contacto y más
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavItem link="#" label="Contacto" />
                <NavItem link="#" label="Consejos" />
                <NavItem link="#" label="Preguntas frecuentes" />
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <NavItem link="/login" label="Login" />
            <NavItem link="/register" label="Register" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Componente para los elementos de la lista de navegación
function NavItem({ link, label }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={link}>
        {label}
      </Link>
    </li>
  );
}

export default NavBar;
