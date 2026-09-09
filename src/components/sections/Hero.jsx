import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="hero-section d-flex align-items-center" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
      marginTop: '-76px',
      paddingTop: '76px'
    }}>
      <div className="container text-white text-center">
        <h1 className="display-3 fw-bold mb-4">
          Transformamos tu idea en <br />una web profesional
        </h1>
        <p className="lead mb-4">
          Diseño, desarrollo y mantenimiento para negocios, emprendimientos y organizaciones en Colombia.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/contacto" className="btn btn-accent btn-lg px-5 py-3">
            <i className="fas fa-paper-plane me-2"></i>Cotiza tu proyecto
          </Link>
          <Link to="/portafolio" className="btn btn-outline-light-custom btn-lg px-5 py-3">
            Ver proyectos
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;