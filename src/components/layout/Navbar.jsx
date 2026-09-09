import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { changeTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fas fa-code text-primary me-2"></i>
          Mi Agencia
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/servicios">Servicios</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/portafolio">Portafolio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            {/* Módulo Tienda: activar/desactivar comentando esta línea */}
            <li className="nav-item"><Link className="nav-link" to="/tienda"><i className="fas fa-store"></i> Tienda</Link></li>
          </ul>
          {/* Selector de temas (solo para demostración) */}
          <div className="ms-3 d-flex gap-2">
            <button className="btn btn-sm btn-outline-secondary" onClick={() => changeTheme('corporate')} title="Corporativo">A</button>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => changeTheme('health')} title="Salud">B</button>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => changeTheme('creative')} title="Creativo">C</button>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => changeTheme('earth')} title="Tierra">D</button>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => changeTheme('modern')} title="Moderno">E</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;