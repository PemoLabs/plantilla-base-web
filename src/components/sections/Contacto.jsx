import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-5" style={{ backgroundColor: 'var(--color-light)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center display-5 fw-bold mb-2">Hablemos de tu proyecto</h2>
            <p className="text-center text-muted mb-4">Completa el formulario y te responderé en menos de 24 horas.</p>
            <form name="contacto" method="POST" netlify className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-bold">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="col-12">
                  <label htmlFor="telefono" className="form-label fw-bold">Teléfono (opcional)</label>
                  <input type="tel" className="form-control" id="telefono" name="telefono" />
                </div>
                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label fw-bold">¿Qué necesitas?</label>
                  <textarea className="form-control" id="mensaje" name="mensaje" rows="4" placeholder="Cuéntame sobre tu negocio y qué tipo de web necesitas..." required></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-accent btn-lg px-5">
                    <i className="fas fa-paper-plane me-2"></i>Enviar mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;