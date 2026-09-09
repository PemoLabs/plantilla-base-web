import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: 'var(--color-dark)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small text-white">&copy; 2026 Mi Agencia. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white me-3"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;