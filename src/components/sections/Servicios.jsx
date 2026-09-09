import React from 'react';

const Servicios = () => {
  return (
    <section id="servicios" className="py-5" style={{ backgroundColor: 'var(--color-light)' }}>
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-2">Soluciones digitales</h2>
        <p className="text-center text-muted mb-5">Lo que necesitas para destacar en internet</p>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <div className="card-body text-center">
                <i className="fas fa-globe fa-3x mb-3" style={{ color: 'var(--color-accent)' }}></i>
                <h5 className="card-title fw-bold">Landing Page</h5>
                <p className="card-text text-muted">Página de aterrizaje para campañas, eventos o lanzamientos. 100% responsive.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <div className="card-body text-center">
                <i className="fas fa-store fa-3x mb-3" style={{ color: 'var(--color-accent)' }}></i>
                <h5 className="card-title fw-bold">Sitio Corporativo</h5>
                <p className="card-text text-muted">Web institucional con varias páginas, formulario de contacto y mapa.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <div className="card-body text-center">
                <i className="fas fa-cart-plus fa-3x mb-3" style={{ color: 'var(--color-accent)' }}></i>
                <h5 className="card-title fw-bold">Tienda Virtual</h5>
                <p className="card-text text-muted">Catálogo de productos conectado a base de datos. Fácil de administrar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;